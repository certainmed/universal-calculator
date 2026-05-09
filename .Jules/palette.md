## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2023-10-27 - Sidebar Navigation Accessibility
**Learning:** In vanilla JavaScript SPAs, visual state classes like `.active` must be manually synchronized with state-based ARIA attributes (like `aria-current="page"`) for screen readers.
**Action:** Added `aria-current="page"` whenever `.active` is applied to navigation items, and removed it when the class is removed.
