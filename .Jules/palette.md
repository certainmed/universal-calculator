## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2024-05-20 - Synchronizing Semantic State in SPAs
**Learning:** Visual state classes (like `.active` for navigation or sidebar toggles) do not inherently convey meaning to screen readers. Relying solely on visual cues breaks accessibility for users of assistive technologies.
**Action:** Always synchronize visual states with their corresponding ARIA attributes (e.g., `aria-current="page"`, `aria-expanded`) via JavaScript when toggling CSS classes. Furthermore, dynamic text updates (like calculation results) must be wrapped in a container with `aria-live` to ensure they are announced automatically.
