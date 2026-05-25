## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-05-25 - ARIA State Sync in Vanilla JS SPAs
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-expanded`) must be manually synchronized with their corresponding visual CSS classes (like `.active`) via JavaScript event handlers.
**Action:** When setting ARIA boolean attributes (like `aria-expanded`) via JavaScript's `setAttribute()`, explicitly pass mapped string values (`"true"` or `"false"`) rather than relying on raw JavaScript booleans to ensure correct accessibility tree behavior.
