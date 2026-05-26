## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - ARIA State Synchronization
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-expanded` and `aria-current`) must be manually synchronized with visual CSS classes (like `.active`) in all event handlers that modify the state.
**Action:** Whenever toggling a visual state class, immediately update its corresponding ARIA attribute using `setAttribute()` with string values ("true"/"false").
