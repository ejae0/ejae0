# Security Specification (`security_spec.md`)

## 1. Data Invariants
1. **User Isolation & PII Protection**: All user PII (`users/{userId}`), coupons, orders, reviews, and customer service inquiries are stored under `/users/{userId}` and require `request.auth != null && request.auth.token.email_verified == true && request.auth.uid == userId` (or verified admin).
2. **Master Gate**: Subcollections (`coupons`, `orders`, `reviews`, `inquiries`) require the parent `/users/{userId}` document to exist (`exists` / `existsAfter` on `WriteBatch` creation).
3. **Self-Assigned Privilege Prevention**: Users cannot assign themselves elevated `membershipTier` (`SILVER`/`GOLD`/`BLACK`) or `points` on profile creation or update.
4. **Coupon Integrity**: Only allowlisted promo codes (`WELCOME15`, `MONODAY15`, `MATINKIM15`, `SPRING10`, `FIRST5000`) can be claimed, always starting with `status == 'available'`, and cannot revert from `'used'` or `'expired'` back to `'available'`.
5. **Order State Machine & Terminal Locking**: Orders start in `'paid'`, allow bounded items (`1..50`), and lock terminal statuses (`'cancelled'`, `'returned'`) against client modification.
6. **Temporal & Identity Integrity**: All `createdAt` and `updatedAt` fields must equal `request.time`; `userId`/`uid` cannot be spoofed or reassigned on update.

## 2. The "Dirty Dozen" Attack Payloads (Expected: PERMISSION_DENIED)
1. **Unauthenticated Profile Read**: Read `/users/userA` with `auth == null`.
2. **Cross-User PII Read**: Read `/users/userA` as verified `userB`.
3. **Unverified Email Write**: Create `/users/userA` with `email_verified: false`.
4. **Self-Assigned VIP Tier & Points**: Create `/users/userA` with `membershipTier: 'BLACK', points: 999999`.
5. **Shadow Ghost Field Injection**: Create `/users/userA` with extra `isAdmin: true` field.
6. **ID Poisoning**: Create `/users/userA/orders/invalid$id!with*badchars` or >128-char ID.
7. **Forged 100% Coupon**: Create `/users/userA/coupons/hack` with `code: 'HACK100', discountValue: 100`.
8. **Coupon Reuse (Terminal Bypass)**: Update coupon from `status: 'used'` back to `status: 'available'`.
9. **Spoofed Timestamp**: Create order with client-forged `createdAt` not equal to `request.time`.
10. **Order Total Tampering After Placement**: Update `finalPrice` on an existing order.
11. **Terminal Order Reversal**: Update order from `status: 'cancelled'` back to `status: 'paid'`.
12. **Inquiry Reply Spoofing**: User updates their own `inquiries/{id}` to inject `status: '답변완료'` and `reply: '무료 증정'`.
