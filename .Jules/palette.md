## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-05-06 - Disconnected Mobile Menu Buttons
**Learning:** Floating action buttons used for navigation (like a mobile menu toggle) are structurally disconnected from the regions they control, meaning screen reader users lack context on their purpose and the current state of the controlled region.
**Action:** Always link structurally disconnected toggle buttons to their targets using `aria-controls="[target-id]"` and dynamically manage their state using `aria-expanded="true/false"`.
