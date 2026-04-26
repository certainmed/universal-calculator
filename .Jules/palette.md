## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-26 - Vanilla JS SPA ARIA State Management
**Learning:** In a vanilla JavaScript Single Page Application, state-based accessibility attributes like `aria-current="page"` and `aria-expanded` must be manually and explicitly synchronized with their visual CSS counterparts (like `.active`). Screen readers don't inherently understand visual class changes. Furthermore, using `element.setAttribute("aria-expanded", true)` in JS often results in `"true"` being parsed correctly by browsers, but explicitly mapping boolean logic to string literals (`isActive ? "true" : "false"`) ensures maximum predictability and conformity across all screen readers when toggling boolean ARIA attributes.
**Action:** When implementing custom interactive components (like collapsible menus or tabbed navigation) without a framework, always pair visual state changes (adding/removing classes) with explicit DOM attribute updates using string values for boolean ARIA attributes.
