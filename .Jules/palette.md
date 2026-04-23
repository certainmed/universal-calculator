## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Synchronize aria-expanded
**Learning:** Adding the aria-expanded attribute to a mobile menu toggle button is insufficient if the state doesn't dynamically reflect whether the sidebar is visible, which can mislead screen reader users.
**Action:** Always synchronize the `aria-expanded` state with the visual toggle state using explicit string values (`"true"`/`"false"`) in JavaScript event handlers.
