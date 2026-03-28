## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - State-Based ARIA Attributes Synchronization
**Learning:** In vanilla JS SPAs, CSS classes (like `.active`) used for visual state changes do not automatically update state-based accessibility attributes. Screen reader users can miss important context like whether a menu is expanded (`aria-expanded`) or an item is the current page (`aria-current`).
**Action:** When toggling visual state classes in JavaScript, always manually synchronize the corresponding ARIA attributes to ensure the accessibility tree matches the visual state.
