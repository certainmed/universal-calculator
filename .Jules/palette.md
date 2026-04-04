## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-04 - State-based ARIA Synchronization
**Learning:** In vanilla JavaScript applications, interactive UI elements relying on CSS classes (e.g., `.active`) for state visualization leave screen reader users unaware of state changes if corresponding ARIA attributes (`aria-current`, `aria-expanded`) are not manually synchronized via JavaScript event handlers.
**Action:** Always map state-representing CSS class toggles (`classList.add/remove/toggle`) to their respective ARIA attribute updates (`setAttribute('aria-...', value)`) within the same event handler or function.
