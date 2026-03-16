## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-03-16 - Dynamic Result Announcements
**Learning:** Updating calculation results dynamically leaves screen reader users unaware of the change without manual exploration.
**Action:** Always use `aria-live="polite"` and `aria-atomic="true"` on result containers that change dynamically based on user input, ensuring seamless and non-disruptive announcements.
