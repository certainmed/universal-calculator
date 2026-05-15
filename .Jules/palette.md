## 2026-02-15 - Calculator Focus Management
**Learning:** Loading new content into a main region without moving focus leaves screen reader users stranded at the navigation trigger.
**Action:** Always shift focus to the main heading of the new content (`tabindex="-1"`) when performing client-side navigation or content replacement.

## 2026-02-15 - Dual Focus Strategy
**Learning:** Depending exclusively on outlines for keyboard navigation focus indicators can cause visual conflicts with standard mouse interaction (e.g. clicking an input). Using `:focus-visible` solely is good for buttons, but inputs need focus indication that works regardless of interaction type.
**Action:** Use a dual strategy: apply `:focus-visible` with outlines for standard interactive elements (buttons, links, generic tabindex) to keep mouse interaction clean, but use `box-shadow` on `:focus` for form inputs to ensure they are always clearly active when receiving input without disrupting layout.
