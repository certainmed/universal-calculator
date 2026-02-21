## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Live Region for Dynamic Results
**Learning:** For calculator tools where results update without a page reload, the result container MUST be an `aria-live` region (e.g., `polite`) to provide immediate feedback to screen reader users. Without it, the "Calculate" action appears broken as it produces no audible change.
**Action:** Add `aria-live="polite"` and `aria-atomic="true"` to the result container of all single-page calculators.
