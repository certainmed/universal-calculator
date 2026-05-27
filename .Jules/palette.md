## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-05-27 - Manual ARIA State Sync in Vanilla JS
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-expanded`) do not automatically sync with visual CSS class changes (like `.active`).
**Action:** Always manually update related ARIA attributes when toggling visual state classes in JavaScript event handlers.
