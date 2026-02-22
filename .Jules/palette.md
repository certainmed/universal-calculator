## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-17 - Global Search Shortcut
**Learning:** Adding a common keyboard shortcut (like `/`) to focus search drastically improves keyboard navigation efficiency for power users without adding visual clutter.
**Action:** Implement global shortcuts for primary actions, but always prevent default behavior when typing in other inputs.
