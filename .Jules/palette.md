## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-16 - Synchronizing ARIA State with Visual State
**Learning:** In vanilla JavaScript SPAs without declarative rendering (like React/Vue), adding visual states like `.active` to navigation or toggle buttons isn't enough. Screen reader users remain unaware of these state changes unless accessibility attributes are manually synchronized.
**Action:** Always manually sync `aria-expanded` (using strings `"true"`/`"false"`) for collapsibles/menus, and `aria-current="page"` for active navigation items directly within the JavaScript event handlers that toggle their corresponding visual CSS classes.
