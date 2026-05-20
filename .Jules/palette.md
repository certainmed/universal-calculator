## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.
## 2026-02-15 - Dynamic ARIA Attributes Sync
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) do not automatically sync with visual CSS classes (like `.active`).
**Action:** When creating or toggling UI elements with JavaScript, manually synchronize their ARIA attributes with their corresponding CSS visual states via event handlers.
