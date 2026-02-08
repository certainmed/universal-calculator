## 2025-05-23 - Interactive Cards Accessibility
**Learning:** The application extensively uses `div` elements with click handlers for interactive "card" components. This pattern completely excludes keyboard users as `div`s are not focusable or activatable by default.
**Action:** When encountering interactive cards, convert them to `<button>` elements (with `type="button"`). This provides native keyboard accessibility (Tab, Enter/Space) for free. Ensure to apply CSS resets (border: none, text-align: left, font: inherit, etc.) to maintain the original visual design.
