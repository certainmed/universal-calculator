## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2024-05-01 - Synchronizing Visual and ARIA States
**Learning:** In vanilla JS SPAs, relying solely on CSS classes (like `.active`) leaves screen reader users unaware of state changes for navigation and interactive elements.
**Action:** Manually synchronize state-based accessibility attributes (`aria-current="page"`, `aria-expanded`) with their corresponding visual CSS classes via JavaScript event handlers, explicitly passing mapped string values (`"true"`/`"false"`).
