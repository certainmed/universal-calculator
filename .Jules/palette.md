## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - ARIA Live Regions for Dynamic Results
**Learning:** In SPA-like calculators where results are updated dynamically on the same page, screen reader users are not notified of the change by default.
**Action:** Add `aria-live="polite"` and `aria-atomic="true"` to the result container element so that screen readers announce the updated content when the calculation completes.
