## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-18 - Synchronize ARIA state with Visual state
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) do not automatically update. They must be manually synchronized with their corresponding visual CSS classes (like `.active`) via JavaScript event handlers to maintain an accurate accessibility tree.
**Action:** When adding or removing state-representing CSS classes (e.g. `.active`), always check if a corresponding ARIA attribute (e.g., `aria-expanded` for toggles or `aria-current` for navigation) needs to be synchronously updated.
