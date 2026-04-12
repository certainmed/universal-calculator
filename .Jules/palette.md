## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-16 - ARIA State Synchronization in Vanilla SPAs
**Learning:** Screen reader users rely on dynamic ARIA attributes (like `aria-expanded` and `aria-current`) to understand visual state changes. In vanilla JavaScript SPAs, updating a CSS class like `.active` does not automatically update accessibility state.
**Action:** Always manually synchronize relevant ARIA attributes (using explicit `"true"` or `"false"` strings) alongside CSS class updates in JavaScript event handlers.
