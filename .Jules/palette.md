## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.
## 2026-03-30 - Vanilla JS State Synchronization
**Learning:** In vanilla JavaScript SPAs, CSS state classes (like `.active`) don't automatically convey semantic state to screen readers, unlike frameworks with built-in reactive bindings.
**Action:** When manually toggling visual states via `classList` (e.g., `.active`, visible/hidden), always synchronously toggle the corresponding ARIA attributes (`aria-current="page"`, `aria-expanded`) in the same event handler.
