## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-05-17 - ARIA State Synchronization
**Learning:** In vanilla JavaScript single-page applications, dynamic state changes like `.active` classes on navigation items or toggled sidebars aren't automatically communicated to screen readers.
**Action:** Manually synchronize accessibility attributes (`aria-current="page"`, `aria-expanded`) alongside visual CSS class updates using JavaScript event handlers to maintain an accurate accessibility tree.
