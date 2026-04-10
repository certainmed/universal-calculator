## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Synchronizing State with ARIA
**Learning:** In vanilla JS apps, relying purely on CSS classes (like `.active`) for component states hides the visual reality from screen readers. Native semantic elements or accurate ARIA attributes must be updated concurrently.
**Action:** Always pair visual state toggles (like `classList.toggle("active")`) with corresponding ARIA attribute updates (`setAttribute("aria-expanded", "true/false")` or `aria-current="page"`) during DOM manipulation.
