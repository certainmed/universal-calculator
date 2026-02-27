## 2024-05-24 - Dynamic Content Accessibility
**Learning:** Screen readers do not automatically announce content that is updated dynamically (like calculator results) unless explicitly instructed.
**Action:** Always add `aria-live="polite"` and `aria-atomic="true"` to containers where results of user actions are rendered asynchronously.