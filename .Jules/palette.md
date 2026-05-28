## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Synchronizing ARIA State with CSS Classes
**Learning:** In vanilla JavaScript single-page applications, visual active states (like `.active` classes) do not automatically communicate their state to assistive technologies. We must manually synchronize ARIA attributes (like `aria-current="page"` for active navigation links and `aria-expanded` for togglable menus) with these visual classes.
**Action:** Always map toggle events and active class assignments to their corresponding `setAttribute` calls for ARIA booleans or strings. Specifically, set `aria-expanded` strictly to string `"true"` or `"false"`, and set `aria-current` to `"page"` when indicating active navigation.
