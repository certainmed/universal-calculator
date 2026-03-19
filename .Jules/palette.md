## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2024-03-20 - Manual ARIA Synchronization in Vanilla JS SPAs
**Learning:** In vanilla JavaScript SPAs, state-based accessibility attributes (like `aria-current="page"` and `aria-expanded`) must be manually synchronized with their corresponding visual CSS classes (like `.active`) via JavaScript event handlers to maintain accessibility states for screen readers, unlike frameworks that often handle this reactively. Additionally, dynamically injected SVGs must be explicitly given `aria-hidden="true"` to hide decorative elements from assistive technologies.
**Action:** Always verify that DOM manipulations toggling visual states (like expanding menus or selecting active tabs) simultaneously update the relevant ARIA attributes. Create tests (like Playwright UI checks) to ensure these attributes are correctly present and toggled when corresponding actions occur.
