## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Synchronizing State-Based ARIA Attributes
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) must be manually synchronized with their corresponding visual CSS classes (like `.active`) via JavaScript event handlers to maintain an accurate accessibility tree.
**Action:** When toggling visual states (e.g., active navigation items, expanded menus), always update the corresponding ARIA attributes explicitly using string values (`"true"`, `"false"`, or `"page"`).
