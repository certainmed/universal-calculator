## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2023-10-27 - Manual ARIA Synchronization in SPAs
**Learning:** In vanilla JavaScript single-page applications, state-based visual indicators (like the `.active` CSS class) do not automatically convey their state to assistive technologies.
**Action:** Always manually synchronize state-based ARIA attributes (e.g., `aria-current="page"` for active navigation items, and `aria-expanded` for toggle buttons) via JavaScript event handlers whenever the corresponding visual CSS classes are updated. Use explicit string values (`"true"`/`"false"`) for ARIA boolean attributes.
