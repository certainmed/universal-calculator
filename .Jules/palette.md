## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - ARIA Attribute Synchronization in SPAs
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like aria-current='page' and aria-expanded) are not automatically kept in sync with their visual CSS classes (like .active).
**Action:** When updating a state-based CSS class (e.g., toggling `.active` on a menu or navigation item), explicitly synchronize the corresponding ARIA attribute (e.g., `aria-expanded` or `aria-current`) via JavaScript event handlers.
