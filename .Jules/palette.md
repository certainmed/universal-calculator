## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Search Shortcut Discovery
**Learning:** Keyboard shortcuts like '/' for search are powerful but invisible without UI hints.
**Action:** Always include shortcut hints in the UI (e.g., in placeholder text or tooltips) to make them discoverable.
