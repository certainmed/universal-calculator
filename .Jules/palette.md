## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Synchronizing State with ARIA Attributes
**Learning:** In vanilla JavaScript SPAs, visual CSS state classes (like `.active`) don't communicate anything to screen readers by themselves.
**Action:** State-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) must be manually synchronized with their corresponding visual CSS classes via JavaScript event handlers whenever the visual state changes. When setting ARIA boolean attributes (like `aria-expanded`) via JavaScript's `setAttribute()`, explicitly pass mapped string values (`"true"` or `"false"`).
