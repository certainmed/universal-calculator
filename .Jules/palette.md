## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Synchronizing ARIA Attributes
**Learning:** In vanilla JS SPAs, state-based accessibility attributes like `aria-current="page"` and `aria-expanded` must be manually kept in sync with the visual CSS classes (like `.active`). Screen readers don't pick up on visual cues alone.
**Action:** Always add explicit Javascript to toggle these attributes (e.g., `setAttribute("aria-expanded", "true")` and `removeAttribute("aria-current")`) alongside class list toggling for corresponding UI components.
