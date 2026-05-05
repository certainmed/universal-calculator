## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - State-based ARIA Synchronization
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) do not automatically update when visual CSS classes (like `.active`) are toggled.
**Action:** Manually synchronize these attributes with their corresponding CSS classes via JavaScript event handlers, explicitly passing mapped string values (`"true"` or `"false"`) to `setAttribute()`.
