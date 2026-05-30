## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-05-30 - Mobile Navigation Accessibility
**Learning:** Screen readers rely on `aria-expanded` on trigger buttons to announce whether a menu or sidebar is open or closed, but this state is easily desynchronized if toggled via JS classes without corresponding ARIA attribute updates.
**Action:** When creating custom mobile menus or toggleable sidebars, ensure the trigger button has `aria-controls` pointing to the target element's ID, and explicitly synchronize `aria-expanded` (as "true" or "false" strings) whenever the visual state changes (e.g., toggle, click-outside-to-close, programmatic close).
