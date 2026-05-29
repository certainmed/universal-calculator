## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Explicit String Values for ARIA Boolean Attributes
**Learning:** When dynamically setting ARIA boolean attributes (like `aria-expanded`) via JavaScript's `setAttribute()`, passing raw JavaScript booleans (`true` or `false`) can lead to unexpected string conversions or missing updates in the accessibility tree depending on browser implementation and screen reader combinations.
**Action:** Always explicitly pass mapped string values (e.g., `"true"` or `"false"`) when setting ARIA boolean attributes to ensure reliable communication of component state changes to assistive technologies.
