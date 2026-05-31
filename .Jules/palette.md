## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - ARIA Expanded Synchronization in Vanilla JS
**Learning:** In vanilla JavaScript SPAs, ARIA boolean attributes (like `aria-expanded` and `aria-current`) do not automatically sync with visual CSS state classes (like `.active`). Furthermore, setting these properties via JS `setAttribute` requires explicitly mapping to string values `"true"` or `"false"` to correctly update the accessibility tree.
**Action:** Always manually wire up `aria-expanded` state changes via event handlers whenever toggling the visibility of collapsible components (like mobile menus or accordions).
