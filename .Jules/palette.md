## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-10-24 - Search Shortcut Discoverability
**Learning:** Adding a visual keyboard shortcut hint (like `/`) improves discoverability, but it must be hidden when the input is focused to avoid visual clutter and confusion.
**Action:** Use CSS sibling combinators (`input:focus ~ .hint`) to manage hint visibility based on focus state.
