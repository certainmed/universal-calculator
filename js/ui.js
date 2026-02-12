
export function initializeUI(calculators) {
    const sidebarNav = document.getElementById("sidebar-nav");
    const calculatorDisplay = document.getElementById("calculator-display");
    const pageTitle = document.getElementById("page-title");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const sidebar = document.querySelector(".sidebar");

    let currentCalculatorId = null;

    function loadCalculator(category, subcategory, id) {
        // Update Active State
        const buttons = document.querySelectorAll(".nav-item");
        buttons.forEach(btn => btn.classList.remove("active"));

        // Find the calculator object
        const calc = calculators[category].subcategories[subcategory].find(c => c.id === id);
        if (!calc) return;

        // Set active class on button
        // Since we regenerate buttons, we can't easily reference "this" from onclick unless passed.
        // But we can search by text or keep a reference if we wanted.
        // For simplicity, let's just loop and match text again as in original script,
        // or improved: match by checking if the onclick handler corresponds? No.
        // Match by text content is what the original did.
        for (const btn of buttons) {
            if (btn.textContent === calc.name) {
                btn.classList.add("active");
                break;
            }
        }

        currentCalculatorId = id;
        pageTitle.textContent = calc.name;
        document.title = calc.name + " - Universal Calculator";

        // Show Top Bar (was hidden on home page)
        const topBar = document.querySelector(".top-bar");
        if (topBar) topBar.classList.remove("hidden");

        // Close mobile sidebar
        sidebar.classList.remove("active");

        // Render Content
        calculatorDisplay.innerHTML = calc.generateHTML();
        calc.attachEvents();
    }

    function renderSidebar() {
        sidebarNav.innerHTML = "";

        for (const [catKey, category] of Object.entries(calculators)) {
            // Category Header
            const catHeader = document.createElement("div");
            catHeader.className = "nav-category";

            const catTitle = document.createElement("div");
            catTitle.className = "nav-category-header";
            catTitle.innerHTML = `
                <svg class="icon"><use href="#${category.icon}"></use></svg>
                ${category.label}
            `;
            catHeader.appendChild(catTitle);

            // Subcategories & Calculators
            const subcats = category.subcategories;
            for (const [subKey, calcList] of Object.entries(subcats)) {
                if (!calcList || calcList.length === 0) continue;

                calcList.forEach(calc => {
                    const btn = document.createElement("button");
                    btn.className = "nav-item";
                    btn.textContent = calc.name;
                    btn.onclick = () => loadCalculator(catKey, subKey, calc.id);
                    catHeader.appendChild(btn);
                });
            }

            sidebarNav.appendChild(catHeader);
        }
    }

    // Mobile Menu Toggle & Draggable Logic
    let isDraggingButton = false;

    function makeDraggable(element) {
        let startX, startY, startLeft, startTop;

        function onMouseDown(e) {
            // Only trigger for left mouse button or touch
            if (e.type === 'mousedown' && e.button !== 0) return;

            isDraggingButton = false;
            startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

            const rect = element.getBoundingClientRect();
            startLeft = rect.left;
            startTop = rect.top;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
            document.addEventListener('touchmove', onMouseMove, { passive: false });
            document.addEventListener('touchend', onMouseUp);
        }

        function onMouseMove(e) {
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

            const dx = clientX - startX;
            const dy = clientY - startY;

            // Threshold to consider it a drag
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                isDraggingButton = true;
                element.style.left = `${startLeft + dx}px`;
                element.style.top = `${startTop + dy}px`;
                element.style.bottom = 'auto';
                element.style.right = 'auto';
                element.style.transform = 'none'; // Ensure no transform interferes
            }
        }

        function onMouseUp(e) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('touchmove', onMouseMove);
            document.removeEventListener('touchend', onMouseUp);

            // Reset flag after a short delay to allow click event to process
            setTimeout(() => { isDraggingButton = false; }, 100);
        }

        element.addEventListener('mousedown', onMouseDown);
        element.addEventListener('touchstart', onMouseDown);
    }

    // Initialize Draggable
    if (mobileMenuBtn) {
        makeDraggable(mobileMenuBtn);

        mobileMenuBtn.addEventListener("click", (e) => {
            if (isDraggingButton) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            sidebar.classList.toggle("active");
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 900) {
            // Check if click target is not sidebar and not the menu button
            if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target) && sidebar.classList.contains("active")) {
                sidebar.classList.remove("active");
            }
        }
    });

    // Search Functionality
    const searchInput = document.getElementById("calc-search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            const categories = document.querySelectorAll(".nav-category");

            categories.forEach(category => {
                let hasVisibleItems = false;
                const items = category.querySelectorAll(".nav-item");

                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(query)) {
                        item.style.display = "block";
                        hasVisibleItems = true;
                    } else {
                        item.style.display = "none";
                    }
                });

                // Show/hide category header based on visible items
                if (hasVisibleItems) {
                    category.style.display = "block";
                } else {
                    category.style.display = "none";
                }
            });
        });
    }

    // Initial Render call
    renderSidebar();

    // Top bar is now visible by default to show the search bar
    const topBar = document.querySelector(".top-bar");
    if (topBar) {
        topBar.classList.remove("hidden");
    }

    // Global Enter Key Support
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            // Check if focus is on an input or select
            if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") {
                // Find the calculate button within the active calculator display
                const calcBtn = document.querySelector("#calculator-display .calculate-btn");
                if (calcBtn) {
                    calcBtn.click();
                    e.preventDefault();
                }
            }
        }
    });
}
