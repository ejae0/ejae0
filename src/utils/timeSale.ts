import { Product } from '../data/products';

export interface NoonCycleInfo {
  cycleKey: string;
  cycleSeed: number;
  nextNoon: Date;
  remainingMs: number;
  countdown: string;
}

export function formatCountdown(ms: number): string {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/**
 * Returns daily Time Sale cycle info resetting every day at 12:00 PM (local noon).
 */
export function getNoonCycleInfo(now: Date = new Date()): NoonCycleInfo {
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  const todayNoon = new Date(year, month, day, 12, 0, 0, 0);
  const cycleStart =
    now.getTime() >= todayNoon.getTime()
      ? todayNoon
      : new Date(year, month, day - 1, 12, 0, 0, 0);
  const nextNoon =
    now.getTime() >= todayNoon.getTime()
      ? new Date(year, month, day + 1, 12, 0, 0, 0)
      : todayNoon;

  const cy = cycleStart.getFullYear();
  const cm = String(cycleStart.getMonth() + 1).padStart(2, '0');
  const cd = String(cycleStart.getDate()).padStart(2, '0');
  const cycleKey = `${cy}-${cm}-${cd}-12:00`;

  let seed = 0;
  for (let i = 0; i < cycleKey.length; i++) {
    seed = (seed * 31 + cycleKey.charCodeAt(i)) >>> 0;
  }

  const remainingMs = Math.max(0, nextNoon.getTime() - now.getTime());

  return {
    cycleKey,
    cycleSeed: seed,
    nextNoon,
    remainingMs,
    countdown: formatCountdown(remainingMs),
  };
}

function hashProductForCycle(productId: string, cycleSeed: number): number {
  let h = cycleSeed ^ 0x9e3779b9;
  for (let i = 0; i < productId.length; i++) {
    h = Math.imul(h ^ productId.charCodeAt(i), 0x85ebca6b) >>> 0;
  }
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35) >>> 0;
  return (h ^ (h >>> 16)) >>> 0;
}

/**
 * Deterministically selects daily Time Sale items keyed by the 12:00 PM noon cycle
 * and applies a higher Time Sale discount rate than each item's regular discount.
 */
export function getDailyTimeSaleProducts(
  products: Product[],
  cycleSeed: number
): Product[] {
  if (products.length === 0) return [];

  // Group by gender + category so every filter tab has rotating daily picks
  const buckets = new Map<string, Product[]>();
  for (const p of products) {
    const key = `${p.gender}:${p.category}`;
    const list = buckets.get(key) || [];
    list.push(p);
    buckets.set(key, list);
  }

  const selectedIds = new Set<string>();

  buckets.forEach((bucketItems) => {
    const ranked = [...bucketItems].sort(
      (a, b) => hashProductForCycle(a.id, cycleSeed) - hashProductForCycle(b.id, cycleSeed)
    );
    const pickCount = Math.min(3, Math.max(2, Math.ceil(bucketItems.length * 0.1)));
    for (let i = 0; i < Math.min(pickCount, ranked.length); i++) {
      selectedIds.add(ranked[i].id);
    }
  });

  return products
    .filter((p) => selectedIds.has(p.id))
    .map((p) => {
      const h = hashProductForCycle(p.id, cycleSeed);
      const originalListPrice =
        p.discount > 0 ? Math.round(p.price / (1 - p.discount / 100)) : p.price;

      // Always higher than the item's regular discount (+15% ~ +25% boost, min 30% off)
      const boostStep = (h % 3) * 5; // 0, 5, 10
      const timeSaleDiscount = Math.min(65, Math.max(p.discount + 15, 30) + boostStep);

      let timeSalePrice =
        Math.round((originalListPrice * (1 - timeSaleDiscount / 100)) / 100) * 100;
      if (timeSalePrice >= p.price) {
        timeSalePrice = Math.max(1000, Math.round((p.price * 0.8) / 100) * 100);
      }

      return {
        ...p,
        price: timeSalePrice,
        discount: timeSaleDiscount,
        isTimeSale: true,
        regularPrice: p.price,
        regularDiscount: p.discount,
      };
    });
}
