## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.
## 2026-02-15 - ARIA Current for Active Navigation
**Learning:** In SPAs, visual cues like `.active` classes are insufficient for screen readers to identify the current page or active view in a navigation menu.
**Action:** Always synchronize the `.active` CSS class with `aria-current="page"` attribute on navigation items when dynamically rendering views to ensure parity in the accessibility tree.
