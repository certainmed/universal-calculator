## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-18 - Dynamic Result Feedback
**Learning:** Replacing `innerHTML` for calculation results without `aria-live` leaves screen reader users unaware of changes. Pairing `aria-live="polite"` with a CSS fade-in animation creates a cohesive experience for both sighted and non-sighted users.
**Action:** Use `aria-live` regions for dynamic content updates and reinforce with visual transitions.
