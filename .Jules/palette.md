## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-30 - Navigation ARIA State Management
**Learning:** In vanilla JavaScript SPAs, CSS class toggles (`.active`) on navigation items are visually adequate but fail to convey semantic state to screen readers. Specifically, a missing `aria-current="page"` leaves screen reader users unable to distinguish the active calculator button, and omitting `aria-expanded` on dynamic menu toggles leaves mobile screen reader users unaware of the menu's state.
**Action:** When manually managing dynamic UI elements in this application, strictly synchronize visual state CSS classes (like `.active`) with their corresponding state-based ARIA attributes (`aria-current` for active tabs/pages, and mapped string values `"true"`/`"false"` for `aria-expanded` on toggles). Also ensure toggles have an associated `aria-controls` attribute targeting the specific container ID.
