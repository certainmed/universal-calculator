## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-04-25 - Focus Visibility and Accessible Navigation
**Learning:** Adding custom keyboard focus indicators using `:focus-visible` ensures accessibility without negatively impacting the visual experience for mouse users, while active UI components mapped to navigation links must communicate their state via `aria-current="page"`.
**Action:** When creating sidebar UI components or custom interactive elements, utilize CSS `:focus-visible` pseudo-class for accessible outlines, and dynamically manage boolean ARIA states with `.setAttribute("aria-current", "page")` via JavaScript.
