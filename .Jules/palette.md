## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-11 - Dynamic ARIA State Synchronization
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-current="page"` for active navigation items and `aria-expanded` for togglable menus) do not update automatically when visual CSS classes (like `.active`) are changed via JavaScript.
**Action:** When manually updating CSS classes for state changes, explicitly synchronize the corresponding ARIA attributes (using `setAttribute` with mapped string values like `"true"`/`"false"` or `removeAttribute`) within the same event handlers.
