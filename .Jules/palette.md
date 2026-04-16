## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - State-Based ARIA Synchronization
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-expanded` and `aria-current`) do not automatically sync with their corresponding visual CSS classes (like `.active`).
**Action:** Always manually synchronize state-based ARIA attributes using JavaScript event handlers to ensure the accessibility tree accurately reflects the visual state of the application.
