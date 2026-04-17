## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-17 - Synchronize state-based ARIA attributes
**Learning:** State-based accessibility attributes (`aria-current`, `aria-expanded`) must be explicitly and manually synchronized with their corresponding visual CSS classes (like `.active`) in vanilla JavaScript SPAs to ensure screen readers match the visual layout.
**Action:** Whenever toggling a `.active` class on elements (like mobile menu buttons or navigation items), simultaneously update `setAttribute('aria-expanded', ...)` or `setAttribute('aria-current', ...)` with string values.
