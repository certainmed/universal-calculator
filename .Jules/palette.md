## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - ARIA State Synchronization
**Learning:** In vanilla JavaScript SPAs, screen readers are unaware when visual state classes like `.active` are added or removed from elements (like navigation items or toggle buttons).
**Action:** Always manually synchronize state-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) with their corresponding visual CSS classes via JavaScript event handlers.
