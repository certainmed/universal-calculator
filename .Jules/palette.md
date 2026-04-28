## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-28 - Manual ARIA Synchronization
**Learning:** In vanilla JavaScript SPAs, state-based ARIA attributes (like `aria-expanded` and `aria-current`) must be manually synchronized with their corresponding visual CSS classes (like `.active`) to maintain an accurate accessibility tree for screen readers.
**Action:** Always ensure that when visual state changes (like opening a mobile menu or setting an active navigation item), the related ARIA attributes are explicitly updated in the JavaScript event handlers.
