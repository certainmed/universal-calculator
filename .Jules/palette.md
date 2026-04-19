## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2024-04-19 - Vanilla JS ARIA Sync
**Learning:** In vanilla JavaScript SPAs, updating a UI element's visual state via CSS classes (e.g., adding `.active` to a navigation item) does not automatically inform screen readers of the state change.
**Action:** Always manually synchronize state-based ARIA attributes (like `aria-current="page"`) alongside their corresponding CSS classes when managing state in vanilla JS, ensuring both visual and structural accessibility are maintained.
