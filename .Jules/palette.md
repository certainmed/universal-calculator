## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-05-04 - Synchronizing ARIA State with Visual State
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) must be manually synchronized with their corresponding visual CSS classes (like `.active`) via JavaScript event handlers to keep the accessibility tree accurate for screen readers.
**Action:** Always ensure `.active` class toggles are accompanied by the correct `aria-*` attribute updates, and ensure `aria-expanded` strictly uses `"true"` or `"false"` string literals when calling `setAttribute`.
