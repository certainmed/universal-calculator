## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2024-05-28 - Syncing ARIA with Visual States in Vanilla SPAs
**Learning:** In vanilla JavaScript Single Page Applications (SPAs), state-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) must be manually synchronized with visual CSS classes (like `.active`). When an element's `.active` class is toggled, its corresponding ARIA state must also be explicitly updated to ensure screen readers are aware of the visual change.
**Action:** When adding or modifying interactive state classes (e.g., `.active`, `.hidden`), always consider if there is a corresponding ARIA attribute (e.g., `aria-current`, `aria-expanded`, `aria-hidden`) that needs to be updated simultaneously in the JavaScript event handlers.
