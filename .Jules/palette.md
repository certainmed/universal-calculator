## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - ARIA State Synchronization in Vanilla JS
**Learning:** State-based accessibility attributes (like `aria-expanded` and `aria-current`) need manual synchronization with visual CSS classes (like `.active`) in vanilla JS Single Page Applications (SPAs).
**Action:** When creating event listeners that toggle visual state classes, explicitly synchronize their corresponding ARIA boolean attributes by passing mapped string values (`"true"` or `"false"`).
