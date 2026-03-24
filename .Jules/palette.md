## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-03-24 - Dynamic Content ARIA Announcements
**Learning:** Updates to calculator results were entirely missed by screen reader users because dynamic DOM mutations aren't announced automatically. Additionally, interactive state attributes (like `aria-current` and `aria-expanded`) often diverge from visual CSS classes if not meticulously synchronized.
**Action:** Add `aria-live="polite"` and `aria-atomic="true"` to containers that receive dynamic text updates. Ensure Javascript functions that toggle visual states (like `.active`) also toggle their corresponding ARIA state attributes.
