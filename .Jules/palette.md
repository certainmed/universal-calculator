## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Synchronizing State-Based ARIA Attributes
**Learning:** In vanilla JavaScript SPAs, screen readers are not automatically informed when an active state changes visually (like adding an `.active` class to a navigation item). Without an explicit ARIA attribute, screen reader users do not know which page or tab is currently active.
**Action:** Always manually synchronize state-based ARIA attributes (like `aria-current="page"`) with visual CSS classes when building custom navigation using vanilla JavaScript to ensure the accessibility tree reflects the visual state.
