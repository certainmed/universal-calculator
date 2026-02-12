/**
 * Generates the standard layout for a calculator.
 * @param {string} title - The title of the calculator.
 * @param {string} description - A short description.
 * @param {string} inputsHTML - HTML string for the input form.
 * @param {string} resultId - The ID for the result container.
 * @param {boolean} hasEducationalContent - Whether to show the "What is this?" button.
 * @returns {string} The complete HTML string.
 */
export function createCalculatorLayout(title, description, inputsHTML, resultId, hasEducationalContent = false) {
    let educationalButton = '';
    if (hasEducationalContent) {
        educationalButton = `
            <div style="margin-top: 1.5rem; display: flex; justify-content: flex-end;">
                <button id="what-is-this-btn" class="what-is-this-btn">
                    What is this?
                </button>
            </div>
        `;
    }

    return `
        <div class="calculator-wrapper">
            <div class="calculator-inputs">
                <h3>Inputs</h3>
                <p class="calculator-description">${description}</p>
                <div class="calculator-form">
                    ${inputsHTML}
                </div>
            </div>
            <div class="calculator-results">
                <h3>Result</h3>
                <div id="${resultId}" class="result-content">
                    <span style="opacity: 0.5; font-size: 1rem;">Enter values and click Calculate</span>
                </div>
                ${educationalButton}
                <div id="educational-content-container" class="educational-content-container" style="display: none; margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;"></div>
            </div>
        </div>
    `;
}

/**
 * Animate the reveal of educational content safely and quickly.
 * It reveals top-level elements one by one with a fade/slide effect.
 * @param {string} htmlContent - The HTML content to reveal.
 * @param {HTMLElement} container - The container to render into.
 */
export async function animateReveal(htmlContent, container) {
    // If already visible, maybe just return or toggle?
    // For now, let's assume we want to show it.
    if (container.style.display !== 'none' && container.innerHTML.trim() !== '') {
        return; // Already shown
    }

    container.style.display = 'block';
    container.innerHTML = ''; // Clear previous content

    // Create a temporary container to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // Get all top-level nodes
    const nodes = Array.from(tempDiv.childNodes);

    for (const node of nodes) {
        const clone = node.cloneNode(true);

        // Prepare element for animation
        if (clone.nodeType === Node.ELEMENT_NODE) {
            clone.style.opacity = '0';
            clone.style.transform = 'translateY(10px)';
            clone.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }

        container.appendChild(clone);

        // Trigger reflow and animate
        if (clone.nodeType === Node.ELEMENT_NODE) {
            // Force reflow
            void clone.offsetWidth;

            // Apply styles to show
            clone.style.opacity = '1';
            clone.style.transform = 'translateY(0)';

            // Fast delay between elements (e.g. 50ms)
            await new Promise(r => setTimeout(r, 50));
        } else {
             // Text nodes appear instantly
        }
    }
}
