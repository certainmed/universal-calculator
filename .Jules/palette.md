## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-03-01 - Synchronizing state-based ARIA attributes
**Learning:** In vanilla JS SPAs, modifying CSS classes for visual state (like `.active` for current page or expanded menus) leaves screen readers with outdated context unless corresponding ARIA attributes are updated too.
**Action:** Always write helper functions to manually synchronize `aria-current="page"` and `aria-expanded` whenever toggling state classes like `.active`.
