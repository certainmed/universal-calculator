## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-23 - Keyboard Shortcut Implementation
**Learning:** Global keyboard shortcuts (like '/') are powerful but can conflict with normal typing flow if not carefully scoped.
**Action:** Always check `document.activeElement` (inputs, textareas, selects) before triggering global shortcuts to prevent accidental activation during data entry.
