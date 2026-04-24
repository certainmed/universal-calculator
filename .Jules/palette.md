## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-24 - Synchronizing Visual State with ARIA Attributes
**Learning:** In vanilla JavaScript SPAs, visual state changes (like applying an `.active` class or toggling a mobile menu) must be explicitly synchronized with ARIA state attributes (`aria-current`, `aria-expanded`) so that screen reader users receive accurate context.
**Action:** Always map visual CSS class toggles to corresponding ARIA attribute updates (`setAttribute`, `removeAttribute`) within the same JavaScript event handlers.
