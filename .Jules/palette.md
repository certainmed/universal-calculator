## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-03-04 - Dynamic Result Announcement
**Learning:** When calculator results are updated dynamically on the page without a full page reload, screen readers do not automatically announce the new result to the user.
**Action:** Always use `aria-live="polite"` and `aria-atomic="true"` on dynamically updated containers (like calculator results) to ensure the changes are announced to assistive technologies.
