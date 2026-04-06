## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - State-Based ARIA Attribute Sync
**Learning:** In vanilla JavaScript SPAs, screen readers miss visual state changes (like `.active` classes) if corresponding ARIA attributes aren't manually updated.
**Action:** When toggling visual state classes (e.g. `.active`, `.hidden`), strictly couple the operation with updating semantic accessibility attributes like `aria-current="page"` for active navigation items and `aria-expanded` for togglable menus.
