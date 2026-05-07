## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - State-Based ARIA Attributes
**Learning:** In vanilla JavaScript, state-based accessibility attributes (like `aria-expanded` and `aria-current`) must be manually synced with visual CSS classes (like `.active`) using string booleans ("true"/"false") in `setAttribute` to ensure correct accessibility tree behavior.
**Action:** When toggling visual states via JS, always remember to write paired ARIA attribute updates explicitly.
