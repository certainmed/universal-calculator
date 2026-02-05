## 2025-05-23 - Calculator Cards Keyboard Trap
**Learning:** The calculator selection cards were implemented as clickable divs without keyboard support, creating a barrier for keyboard-only users who could navigate *to* the section but not *select* a tool.
**Action:** Implemented `tabindex="0"`, `role="button"`, and keydown handlers on card generation to match button behavior.
