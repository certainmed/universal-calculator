## 2024-05-22 - Calculator Layout Generator
**Learning:** The application generates calculator UIs dynamically via `js/utils.js:createCalculatorLayout`. This centralization is powerful for applying structural accessibility improvements (like adding headings) across all tools simultaneously.
**Action:** When auditing future components, check for shared layout generators first to maximize impact of fixes.
