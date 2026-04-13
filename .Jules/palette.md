## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - ARIA State Synchronization
**Learning:** In vanilla JavaScript SPAs, visual state changes (like adding an `.active` class or expanding a menu) must be manually accompanied by explicit ARIA state updates (e.g., `aria-current="page"`, `aria-expanded="true"`/`"false"`) to remain accessible to screen readers. Relying on visual cues alone leaves assistive technologies in the dark. Moreover, `setAttribute` requires explicit string representations of booleans ("true" or "false"), not actual boolean types.
**Action:** Always synchronize `.active` CSS classes with `aria-current="page"` for navigation items, and ensure expand/collapse toggles explicitly update `aria-expanded` attributes using string values.
