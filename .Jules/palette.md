## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.
## 2026-04-07 - Synchronizing ARIA State with Visual Classes in Vanilla JS SPAs
**Learning:** In vanilla JavaScript Single Page Applications (SPAs), state-based accessibility attributes such as `aria-expanded` and `aria-current="page"` must be manually and explicitly synchronized with their corresponding visual CSS classes (like `.active`) via JavaScript event handlers, as there is no framework reactivity to do this automatically.
**Action:** When implementing interactive components (like toggles, tabs, or navigation menus) in a vanilla JS environment, always ensure the JavaScript logic updates both the visual state (CSS classes) and the corresponding semantic ARIA attributes simultaneously.
