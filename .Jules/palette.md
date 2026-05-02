## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Synchronizing state classes with ARIA attributes
**Learning:** In vanilla JavaScript apps, relying solely on CSS classes (like `.active`) for state leaves screen reader users blind to UI changes.
**Action:** Manually synchronize state classes with semantic ARIA attributes (e.g., `aria-current="page"` and `aria-expanded`) via JavaScript event handlers whenever the state changes.
