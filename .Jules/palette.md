## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - State-Based ARIA Attribute Synchronization
**Learning:** In vanilla JS SPAs, simply toggling visual classes (like `.active`) for state does not inherently update the accessibility tree. Screen reader users can miss state changes if matching ARIA attributes (like `aria-expanded` and `aria-current`) are not manually synchronized.
**Action:** Always map dynamic state CSS classes to their equivalent ARIA attributes (`aria-current="page"`, `aria-expanded="true/false"`) within JavaScript event handlers that change that state, ensuring explicit strings ("true"/"false") are used for boolean ARIA attributes.
