// State
let currentCalculatorId = null;

// DOM Elements
const sidebarNav = document.getElementById("sidebar-nav");
const calculatorDisplay = document.getElementById("calculator-display");
const pageTitle = document.getElementById("page-title");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const sidebar = document.querySelector(".sidebar");

// Helper: Generate Standard Layout
function createCalculatorLayout(title, description, inputsHTML, resultId) {
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
            </div>
        </div>
    `;
}

// Calculator Data
const calculators = {
  math: {
    icon: "icon-math",
    label: "Math",
    subcategories: {
      percentage: [
        {
          id: "percentage-calculator",
          name: "Percentage Calculator",
          description:
            "Calculate what percent one number is of another, or find a percentage of a number.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="percent-value">Value:</label>
                            <input type="number" id="percent-value" placeholder="Enter value">
                        </div>
                        <div class="form-group">
                            <label for="percent-percentage">Percentage (%):</label>
                            <input type="number" id="percent-percentage" placeholder="Enter percentage">
                        </div>
                        <button id="calculate-percentage" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "percentage-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-percentage")
              .addEventListener("click", function () {
                const value = parseFloat(
                  document.getElementById("percent-value").value
                );
                const percentage = parseFloat(
                  document.getElementById("percent-percentage").value
                );
                const resultDiv = document.getElementById("percentage-result");

                if (isNaN(value) || isNaN(percentage)) {
                  resultDiv.innerHTML = "Please enter valid numbers";
                  return;
                }

                const result = (value * percentage) / 100;
                resultDiv.innerHTML = `${percentage}% of ${value} = <strong>${result.toFixed(
                  2
                )}</strong>`;
              });
          },
        },
        {
          id: "percent-error-calculator",
          name: "Percent Error Calculator",
          description:
            "Calculate the percentage error between a measured value and the actual value.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="actual-value">Actual Value:</label>
                            <input type="number" id="actual-value" placeholder="Enter actual value">
                        </div>
                        <div class="form-group">
                            <label for="measured-value">Measured Value:</label>
                            <input type="number" id="measured-value" placeholder="Enter measured value">
                        </div>
                        <button id="calculate-percent-error" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "percent-error-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-percent-error")
              .addEventListener("click", function () {
                const actualValue = parseFloat(
                  document.getElementById("actual-value").value
                );
                const measuredValue = parseFloat(
                  document.getElementById("measured-value").value
                );
                const resultDiv = document.getElementById(
                  "percent-error-result"
                );

                if (isNaN(actualValue) || isNaN(measuredValue)) {
                  resultDiv.innerHTML = "Please enter valid numbers";
                  return;
                }

                if (actualValue === 0) {
                  resultDiv.innerHTML = "Actual value cannot be zero";
                  return;
                }

                const percentError =
                  Math.abs((measuredValue - actualValue) / actualValue) * 100;
                resultDiv.innerHTML = `Percent Error: <strong>${percentError.toFixed(
                  2
                )}%</strong>`;
              });
          },
        },
        {
          id: "time-percentage-calculator",
          name: "Time Percentage Calculator",
          description: "Calculate the percentage of time elapsed or remaining.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="total-time">Total Time (minutes):</label>
                            <input type="number" id="total-time" placeholder="Enter total time">
                        </div>
                        <div class="form-group">
                            <label for="elapsed-time">Elapsed Time (minutes):</label>
                            <input type="number" id="elapsed-time" placeholder="Enter elapsed time">
                        </div>
                        <button id="calculate-time-percentage" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "time-percentage-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-time-percentage")
              .addEventListener("click", function () {
                const totalTime = parseFloat(
                  document.getElementById("total-time").value
                );
                const elapsedTime = parseFloat(
                  document.getElementById("elapsed-time").value
                );
                const resultDiv = document.getElementById(
                  "time-percentage-result"
                );

                if (isNaN(totalTime) || isNaN(elapsedTime)) {
                  resultDiv.innerHTML = "Please enter valid numbers";
                  return;
                }

                if (totalTime <= 0) {
                  resultDiv.innerHTML = "Total time must be greater than zero";
                  return;
                }

                if (elapsedTime < 0 || elapsedTime > totalTime) {
                  resultDiv.innerHTML =
                    "Elapsed time must be between 0 and total time";
                  return;
                }

                const percentageElapsed = (elapsedTime / totalTime) * 100;
                const percentageRemaining = 100 - percentageElapsed;

                let result = `Elapsed: <strong>${percentageElapsed.toFixed(
                  2
                )}%</strong><br>`;
                result += `Remaining: <strong>${percentageRemaining.toFixed(
                  2
                )}%</strong>`;

                resultDiv.innerHTML = result;
              });
          },
        },
      ],
      algebra: [
        {
          id: "quadratic-equation-calculator",
          name: "Quadratic Equation",
          description:
            "Solve quadratic equations using Standard, Vertex, or Factored forms.",
          generateHTML: function () {
            const educationalText = `
              <div class="educational-section" style="margin-top: 3rem; border-top: 1px solid var(--border-color); padding-top: 2rem;">
                <h3>What is the quadratic formula?</h3>
                <p>The quadratic formula is the solution of a second-degree polynomial equation of the following form:</p>
                <p><strong>Ax² + Bx + C = 0</strong></p>
                <p>If you can rewrite your equation in this form, it means that it can be solved with the quadratic formula. A solution to this equation is also called a root of the equation.</p>
                <p>The quadratic formula is as follows:</p>
                <p><strong>x = (-B ± √Δ)/2A</strong></p>
                <p>where:</p>
                <p><strong>Δ = B² – 4AC</strong></p>
                <p>Using this formula, you can find the solutions to any quadratic equation. Note that there are three possible options for obtaining a result:</p>
                <ul>
                  <li>The quadratic equation has two unique roots when Δ > 0. Then, the first solution of the quadratic formula is x₁ = (-B + √Δ)/2A, and the second is x₂ = (-B – √Δ)/2A.</li>
                  <li>The quadratic equation has only one root when Δ = 0. The solution is equal to x = -B/2A. It is sometimes called a repeated or double root.</li>
                  <li>The quadratic equation has no real solutions for Δ < 0.</li>
                </ul>
                <p>You can also graph the function y = Ax² + Bx + C. Its shape is a parabola, and the roots of the quadratic equation are the x-intercepts of this function.</p>

                <h3 style="margin-top: 1.5rem;">Coefficients of a quadratic equation</h3>
                <p>A, B, and C are the coefficients of the quadratic equation. They are all real numbers, not dependent on x. If A = 0, then the equation is not quadratic, but linear.</p>
                <p>If B² < 4AC, then the discriminant Δ will be negative. It means that such an equation has no real roots.</p>

                <h4 style="margin-top: 1rem;">How to use the quadratic formula solver</h4>
                <p>Write down your equation. Let's assume it is 4x² + 3x – 7 = -4 – x.</p>
                <p>Bring the equation to the form Ax² + Bx + C = 0. In this example, we will do it in the following steps:</p>
                <ol>
                  <li>4x² + 3x - 7 = -4 – x</li>
                  <li>4x² + (3 + 1)x + (-7 + 4) = 0</li>
                  <li>4x² + 4x - 3 = 0</li>
                </ol>
                <p>Calculate the discriminant.</p>
                <p>Δ = B² – 4AC = 4² - 4×4×(-3) = 16 + 48 = 64.</p>
                <p>Decide whether the discriminant is greater, equal, or lower than 0. In our case, the discriminant is greater than 0, which means that this equation has two unique roots.</p>
                <p>Calculate the two roots using the quadratic formula.</p>
                <p>x₁ = (-B + √Δ)/2A = (-4 +√64) / (2×4) = (-4 + 8) / 8 = 4/8 = 0.5</p>
                <p>x₂ = (-B – √Δ)/2A = (-4 -√64) / (2×4) = (-4 – 8) / 8 = -12/8 = -1.5</p>
                <p>The roots of your equation are x₁ = 0.5 and x₂ = -1.5.</p>

                <h3 style="margin-top: 1.5rem;">Solving quadratic equations with a negative discriminant</h3>
                <p>Even though the quadratic formula calculator indicates when the equation has no real roots, it is possible to find the solution of a quadratic equation with a negative discriminant. These roots will be complex numbers.</p>
                <p>Each complex number is a sum of real and imaginary parts. The imaginary part is always equal to the number i = √(-1) multiplied by a real number.</p>
                <p>The quadratic formula remains the same in this case.</p>
                <p><strong>x = (-B ± √Δ)/2A</strong></p>
                <p>Notice that, as Δ < 0, the square root of the discriminant will be an imaginary value. Hence:</p>
                <p>Re(x) = -B/2A</p>
                <p>Im(x) = ± (√Δ)/2A</p>
              </div>
            `;

            const formSelector = `
              <div class="form-group">
                <label>Formula Form:</label>
                <div class="formula-radio-group">
                  <label class="custom-radio-label">
                    <input type="radio" name="quad-form" value="standard" checked>
                    <span class="radio-mark"></span>
                    <span class="radio-text">Ax² + Bx + C = 0</span>
                  </label>
                  <label class="custom-radio-label">
                    <input type="radio" name="quad-form" value="vertex">
                    <span class="radio-mark"></span>
                    <span class="radio-text">A(x - H)² + K = 0</span>
                  </label>
                  <label class="custom-radio-label">
                    <input type="radio" name="quad-form" value="factored">
                    <span class="radio-mark"></span>
                    <span class="radio-text">A(x - x₁)(x - x₂) = 0</span>
                  </label>
                </div>
              </div>
            `;

            const inputs = `
                        ${formSelector}
                        <div id="dynamic-inputs">
                          <!-- Standard Form Inputs (Default) -->
                          <div class="form-group">
                              <label for="quad-a">A:</label>
                              <input type="number" id="quad-a" placeholder="Enter coefficient A">
                          </div>
                          <div class="form-group">
                              <label for="quad-b">B:</label>
                              <input type="number" id="quad-b" placeholder="Enter coefficient B">
                          </div>
                          <div class="form-group">
                              <label for="quad-c">C:</label>
                              <input type="number" id="quad-c" placeholder="Enter coefficient C">
                          </div>
                        </div>
                        <div class="form-group" style="margin-top: 1rem;">
                            <label style="font-weight: normal; display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                                <input type="checkbox" id="allow-complex"> Allow negative discriminant
                            </label>
                        </div>
                        <button id="calculate-quadratic" class="calculate-btn">Solve</button>
                    `;

            return `
              <div class="calculator-wrapper">
                  <div class="calculator-inputs">
                      <h3>Inputs</h3>
                      <p class="calculator-description">${this.description}</p>
                      <div class="calculator-form">
                          ${inputs}
                      </div>
                  </div>
                  <div class="calculator-results">
                      <h3>Result</h3>
                      <div id="quadratic-result" class="result-content">
                          <span style="opacity: 0.5; font-size: 1rem;">Enter values and click Solve</span>
                      </div>
                      <div id="quadratic-explanation" style="margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem; font-size: 0.9rem; line-height: 1.6;">
                      </div>
                  </div>
              </div>
              ${educationalText}
            `;
          },
          attachEvents: function () {
            // Form Switching Logic
            const formRadios = document.querySelectorAll('input[name="quad-form"]');
            const dynamicInputs = document.getElementById("dynamic-inputs");

            formRadios.forEach(radio => {
              radio.addEventListener("change", (e) => {
                const form = e.target.value;
                let html = "";
                if (form === "standard") {
                  html = `
                    <div class="form-group"><label for="quad-a">A:</label><input type="number" id="quad-a" placeholder="Enter coefficient A"></div>
                    <div class="form-group"><label for="quad-b">B:</label><input type="number" id="quad-b" placeholder="Enter coefficient B"></div>
                    <div class="form-group"><label for="quad-c">C:</label><input type="number" id="quad-c" placeholder="Enter coefficient C"></div>
                  `;
                } else if (form === "vertex") {
                  html = `
                    <div class="form-group"><label for="quad-a">A:</label><input type="number" id="quad-a" placeholder="Enter coefficient A"></div>
                    <div class="form-group"><label for="quad-h">H (Vertex x):</label><input type="number" id="quad-h" placeholder="Enter H"></div>
                    <div class="form-group"><label for="quad-k">K (Vertex y):</label><input type="number" id="quad-k" placeholder="Enter K"></div>
                  `;
                } else if (form === "factored") {
                  html = `
                    <div class="form-group"><label for="quad-a">A:</label><input type="number" id="quad-a" placeholder="Enter coefficient A"></div>
                    <div class="form-group"><label for="quad-x1">x₁ (First root):</label><input type="number" id="quad-x1" placeholder="Enter x₁"></div>
                    <div class="form-group"><label for="quad-x2">x₂ (Second root):</label><input type="number" id="quad-x2" placeholder="Enter x₂"></div>
                  `;
                }
                dynamicInputs.innerHTML = html;
                document.getElementById("quadratic-result").innerHTML = '<span style="opacity: 0.5; font-size: 1rem;">Enter values and click Solve</span>';
                document.getElementById("quadratic-explanation").innerHTML = '';
              });
            });

            document
              .getElementById("calculate-quadratic")
              .addEventListener("click", function () {
                const form = document.querySelector('input[name="quad-form"]:checked').value;
                const allowComplex = document.getElementById("allow-complex").checked;
                const resultDiv = document.getElementById("quadratic-result");
                const explanationDiv = document.getElementById("quadratic-explanation");

                let result = "";
                let explanation = "";

                if (form === "standard") {
                  const a = parseFloat(document.getElementById("quad-a").value);
                  const b = parseFloat(document.getElementById("quad-b").value);
                  const c = parseFloat(document.getElementById("quad-c").value);

                  if (isNaN(a) || isNaN(b) || isNaN(c)) {
                    resultDiv.innerHTML = "Please enter valid coefficients";
                    return;
                  }
                  if (a === 0) {
                    resultDiv.innerHTML = "Not a quadratic equation (A = 0)";
                    return;
                  }

                  const discriminant = b * b - 4 * a * c;
                  explanation += `<strong>Step 1: Identify coefficients</strong><br>A = ${a}, B = ${b}, C = ${c}<br><br>`;
                  explanation += `<strong>Step 2: Calculate Discriminant (Δ)</strong><br>Δ = B² - 4AC<br>Δ = (${b})² - 4(${a})(${c})<br>Δ = ${b*b} - ${4*a*c}<br>Δ = ${discriminant}<br><br>`;

                  if (discriminant > 0) {
                    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                    result = `x₁ = <strong>${x1.toFixed(4)}</strong><br>x₂ = <strong>${x2.toFixed(4)}</strong>`;
                    explanation += `<strong>Step 3: Apply Quadratic Formula</strong><br>Since Δ > 0, there are two real roots.<br>x = (-B ± √Δ) / 2A<br>x = (-(${b}) ± √${discriminant}) / (2 × ${a})<br><br>`;
                    explanation += `x₁ = (${-b} + ${Math.sqrt(discriminant).toFixed(4)}) / ${2*a} = <strong>${x1.toFixed(4)}</strong><br>`;
                    explanation += `x₂ = (${-b} - ${Math.sqrt(discriminant).toFixed(4)}) / ${2*a} = <strong>${x2.toFixed(4)}</strong>`;
                  } else if (discriminant === 0) {
                    const x = -b / (2 * a);
                    result = `x = <strong>${x.toFixed(4)}</strong> (Double Root)`;
                    explanation += `<strong>Step 3: Apply Quadratic Formula</strong><br>Since Δ = 0, there is one repeated real root.<br>x = -B / 2A<br>x = -(${b}) / (2 × ${a})<br>x = ${-b} / ${2*a}<br>x = <strong>${x.toFixed(4)}</strong>`;
                  } else {
                    if (allowComplex) {
                        const realPart = -b / (2 * a);
                        const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
                        result = `x₁ = ${realPart.toFixed(4)} + ${imaginaryPart.toFixed(4)}i<br>x₂ = ${realPart.toFixed(4)} - ${imaginaryPart.toFixed(4)}i`;
                        explanation += `<strong>Step 3: Apply Quadratic Formula</strong><br>Since Δ < 0, the roots are complex.<br>x = (-B ± √Δ) / 2A<br>x = (-(${b}) ± √${discriminant}) / (2 × ${a})<br><br>`;
                        explanation += `Real Part: -B / 2A = ${realPart.toFixed(4)}<br>`;
                        explanation += `Imaginary Part: √|Δ| / 2A = √${Math.abs(discriminant)} / ${2*a} = ${imaginaryPart.toFixed(4)}i<br>`;
                    } else {
                        result = "No real roots (Δ < 0)";
                        explanation += `<strong>Step 3: Analyze Discriminant</strong><br>Since Δ < 0, there are no real roots for this equation.<br>Enable "Allow negative discriminant" to see complex solutions.`;
                    }
                  }

                } else if (form === "vertex") {
                    const a = parseFloat(document.getElementById("quad-a").value);
                    const h = parseFloat(document.getElementById("quad-h").value);
                    const k = parseFloat(document.getElementById("quad-k").value);

                    if (isNaN(a) || isNaN(h) || isNaN(k)) {
                        resultDiv.innerHTML = "Please enter valid values";
                        return;
                    }
                    if (a === 0) {
                        resultDiv.innerHTML = "A cannot be 0";
                        return;
                    }

                    // Equation: A(x - H)^2 + K = 0
                    // (x - H)^2 = -K/A
                    explanation += `<strong>Step 1: Set up the equation</strong><br>${a}(x - ${h})² + ${k} = 0<br><br>`;
                    explanation += `<strong>Step 2: Isolate the squared term</strong><br>${a}(x - ${h})² = -${k}<br>(x - ${h})² = ${-k}/${a}<br>`;

                    const rightSide = -k / a;
                    explanation += `(x - ${h})² = ${rightSide}<br><br>`;

                    if (rightSide > 0) {
                        const sqrtVal = Math.sqrt(rightSide);
                        const x1 = h + sqrtVal;
                        const x2 = h - sqrtVal;
                        result = `x₁ = <strong>${x1.toFixed(4)}</strong><br>x₂ = <strong>${x2.toFixed(4)}</strong>`;
                        explanation += `<strong>Step 3: Take the square root</strong><br>x - ${h} = ±√${rightSide}<br>x - ${h} = ±${sqrtVal.toFixed(4)}<br><br>`;
                        explanation += `<strong>Step 4: Solve for x</strong><br>x = ${h} ± ${sqrtVal.toFixed(4)}<br>`;
                        explanation += `x₁ = ${h} + ${sqrtVal.toFixed(4)} = <strong>${x1.toFixed(4)}</strong><br>`;
                        explanation += `x₂ = ${h} - ${sqrtVal.toFixed(4)} = <strong>${x2.toFixed(4)}</strong>`;
                    } else if (rightSide === 0) {
                        const x = h;
                        result = `x = <strong>${x.toFixed(4)}</strong>`;
                        explanation += `<strong>Step 3: Solve for x</strong><br>(x - ${h})² = 0 implies x - ${h} = 0<br>x = <strong>${h}</strong>`;
                    } else {
                         if (allowComplex) {
                             const sqrtVal = Math.sqrt(Math.abs(rightSide));
                             result = `x₁ = ${h} + ${sqrtVal.toFixed(4)}i<br>x₂ = ${h} - ${sqrtVal.toFixed(4)}i`;
                             explanation += `<strong>Step 3: Take the square root</strong><br>Since the right side is negative, we use imaginary numbers.<br>x - ${h} = ±√${rightSide}<br>x - ${h} = ±${sqrtVal.toFixed(4)}i<br><br>`;
                             explanation += `<strong>Step 4: Solve for x</strong><br>x = ${h} ± ${sqrtVal.toFixed(4)}i`;
                         } else {
                             result = "No real roots";
                             explanation += `<strong>Step 3: Analyze</strong><br>Since (x - ${h})² equals a negative number (${rightSide}), there are no real solutions.`;
                         }
                    }

                } else if (form === "factored") {
                    const a = parseFloat(document.getElementById("quad-a").value);
                    const x1 = parseFloat(document.getElementById("quad-x1").value);
                    const x2 = parseFloat(document.getElementById("quad-x2").value);

                    if (isNaN(a) || isNaN(x1) || isNaN(x2)) {
                        resultDiv.innerHTML = "Please enter valid values";
                        return;
                    }
                    if (a === 0) {
                        resultDiv.innerHTML = "A cannot be 0";
                        return;
                    }

                    // Roots are directly x1 and x2
                    result = `x₁ = <strong>${x1}</strong><br>x₂ = <strong>${x2}</strong>`;
                    explanation += `<strong>Step 1: Analyze the Factored Form</strong><br>Equation: ${a}(x - ${x1})(x - ${x2}) = 0<br><br>`;
                    explanation += `<strong>Step 2: Zero Product Property</strong><br>If the product of factors is zero, at least one of the factors must be zero.<br>`;
                    explanation += `Either (x - ${x1}) = 0  OR  (x - ${x2}) = 0<br><br>`;
                    explanation += `<strong>Step 3: Solve for x</strong><br>x = ${x1}<br>x = ${x2}`;
                }

                resultDiv.innerHTML = result;
                explanationDiv.innerHTML = explanation;
              });
          },
        },
        {
          id: "discriminant-calculator",
          name: "Discriminant Calculator",
          description:
            "Calculate the discriminant (b² - 4ac) of a quadratic equation.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="disc-a">a:</label>
                            <input type="number" id="disc-a" placeholder="Enter coefficient a">
                        </div>
                        <div class="form-group">
                            <label for="disc-b">b:</label>
                            <input type="number" id="disc-b" placeholder="Enter coefficient b">
                        </div>
                        <div class="form-group">
                            <label for="disc-c">c:</label>
                            <input type="number" id="disc-c" placeholder="Enter coefficient c">
                        </div>
                        <button id="calculate-discriminant" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "discriminant-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-discriminant")
              .addEventListener("click", function () {
                const a = parseFloat(document.getElementById("disc-a").value);
                const b = parseFloat(document.getElementById("disc-b").value);
                const c = parseFloat(document.getElementById("disc-c").value);
                const resultDiv = document.getElementById("discriminant-result");

                if (isNaN(a) || isNaN(b) || isNaN(c)) {
                  resultDiv.innerHTML = "Please enter valid coefficients";
                  return;
                }

                const discriminant = b * b - 4 * a * c;
                let result = `Discriminant = <strong>${discriminant}</strong><br><br>`;

                if (discriminant > 0) {
                  result += "Two distinct real roots.";
                } else if (discriminant === 0) {
                  result += "One repeated real root.";
                } else {
                  result += "Two complex roots.";
                }

                resultDiv.innerHTML = result;
              });
          },
        },
      ],
      arithmetic: [
        {
          id: "arithmetic-sequence-calculator",
          name: "Arithmetic Sequence",
          description: "Calculate terms and sum of an arithmetic sequence.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="first-term">First Term (a₁):</label>
                            <input type="number" id="first-term" placeholder="Enter first term">
                        </div>
                        <div class="form-group">
                            <label for="common-difference">Common Difference (d):</label>
                            <input type="number" id="common-difference" placeholder="Enter common difference">
                        </div>
                        <div class="form-group">
                            <label for="n-terms">Number of Terms (n):</label>
                            <input type="number" id="n-terms" placeholder="Enter number of terms">
                        </div>
                        <button id="calculate-arithmetic" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "arithmetic-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-arithmetic")
              .addEventListener("click", function () {
                const a1 = parseFloat(
                  document.getElementById("first-term").value
                );
                const d = parseFloat(
                  document.getElementById("common-difference").value
                );
                const n = parseInt(document.getElementById("n-terms").value);
                const resultDiv = document.getElementById("arithmetic-result");

                if (isNaN(a1) || isNaN(d) || isNaN(n)) {
                  resultDiv.innerHTML = "Please enter valid numbers";
                  return;
                }

                if (n <= 0 || !Number.isInteger(n)) {
                  resultDiv.innerHTML = "Terms must be a positive integer";
                  return;
                }

                const an = a1 + (n - 1) * d;
                const sum = (n / 2) * (a1 + an);

                let result = `nth Term (a<sub>n</sub>): <strong>${an.toFixed(
                  2
                )}</strong><br>`;
                result += `Sum of ${n} terms: <strong>${sum.toFixed(
                  2
                )}</strong>`;

                resultDiv.innerHTML = result;
              });
          },
        },
        {
          id: "factorial-calculator",
          name: "Factorial Calculator",
          description: "Calculate the factorial of a non-negative integer n (n!).",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="factorial-n">n:</label>
                            <input type="number" id="factorial-n" placeholder="Enter integer n" min="0" step="1">
                        </div>
                        <button id="calculate-factorial" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "factorial-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-factorial")
              .addEventListener("click", function () {
                const n = parseInt(document.getElementById("factorial-n").value);
                const resultDiv = document.getElementById("factorial-result");

                if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
                  resultDiv.innerHTML = "Please enter a non-negative integer";
                  return;
                }

                let factorial = 1;
                for (let i = 2; i <= n; i++) {
                  factorial *= i;
                  if (!isFinite(factorial)) {
                    resultDiv.innerHTML = "Result too large";
                    return;
                  }
                }

                resultDiv.innerHTML = `${n}! = <strong>${factorial}</strong>`;
              });
          },
        },
      ],
    },
  },
  physics: {
    icon: "icon-physics",
    label: "Physics",
    subcategories: {
      kinematics: [
        {
          id: "projectile-motion-calculator",
          name: "Projectile Motion",
          description: "Calculate key parameters of projectile motion.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="initial-velocity">Initial Velocity (m/s):</label>
                            <input type="number" id="initial-velocity" placeholder="Enter initial velocity">
                        </div>
                        <div class="form-group">
                            <label for="launch-angle">Launch Angle (degrees):</label>
                            <input type="number" id="launch-angle" placeholder="Enter angle" min="0" max="90">
                        </div>
                        <div class="form-group">
                            <label for="initial-height">Initial Height (m):</label>
                            <input type="number" id="initial-height" placeholder="Enter initial height" value="0">
                        </div>
                        <button id="calculate-projectile" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "projectile-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-projectile")
              .addEventListener("click", function () {
                const v0 = parseFloat(
                  document.getElementById("initial-velocity").value
                );
                const angleInDegrees = parseFloat(
                  document.getElementById("launch-angle").value
                );
                const h0 = parseFloat(
                  document.getElementById("initial-height").value
                );
                const resultDiv = document.getElementById("projectile-result");

                if (isNaN(v0) || isNaN(angleInDegrees) || isNaN(h0)) {
                  resultDiv.innerHTML = "Please enter valid numbers";
                  return;
                }

                const angle = (angleInDegrees * Math.PI) / 180;
                const g = 9.81; // Updated gravity constant
                const v0x = v0 * Math.cos(angle);
                const v0y = v0 * Math.sin(angle);
                const timeToMax = v0y / g;
                const maxHeight =
                  h0 + v0y * timeToMax - 0.5 * g * timeToMax * timeToMax;
                const timeOfFlight =
                  (v0y + Math.sqrt(v0y * v0y + 2 * g * h0)) / g;
                const range = v0x * timeOfFlight;

                let result = `Max Height: <strong>${maxHeight.toFixed(
                  2
                )} m</strong><br>`;
                result += `Time to Max: <strong>${timeToMax.toFixed(
                  2
                )} s</strong><br>`;
                result += `Flight Time: <strong>${timeOfFlight.toFixed(
                  2
                )} s</strong><br>`;
                result += `Range: <strong>${range.toFixed(2)} m</strong>`;

                resultDiv.innerHTML = result;
              });
          },
        },
        {
          id: "free-fall-calculator",
          name: "Free Fall Calculator",
          description: "Calculate parameters for objects falling under gravity.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="free-fall-height">Height (m):</label>
                            <input type="number" id="free-fall-height" placeholder="Enter initial height">
                        </div>
                        <div class="form-group">
                            <label for="gravity-value">Gravity (m/s²):</label>
                            <input type="number" id="gravity-value" placeholder="Enter g value" value="9.81">
                        </div>
                        <button id="calculate-free-fall" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "free-fall-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-free-fall")
              .addEventListener("click", function () {
                const height = parseFloat(
                  document.getElementById("free-fall-height").value
                );
                const gravity = parseFloat(
                  document.getElementById("gravity-value").value
                );
                const resultDiv = document.getElementById("free-fall-result");

                if (isNaN(height) || isNaN(gravity)) {
                  resultDiv.innerHTML = "Please enter valid numbers";
                  return;
                }

                if (height < 0 || gravity <= 0) {
                  resultDiv.innerHTML = "Invalid height or gravity";
                  return;
                }

                const time = Math.sqrt((2 * height) / gravity);
                const finalVelocity = gravity * time;

                let result = `Fall Time: <strong>${time.toFixed(
                  2
                )} s</strong><br>`;
                result += `Impact Velocity: <strong>${finalVelocity.toFixed(
                  2
                )} m/s</strong>`;

                resultDiv.innerHTML = result;
              });
          },
        },
      ],
      dynamics: [
        {
          id: "force-calculator",
          name: "Force Calculator",
          description: "Calculate force using Newton's Second Law: F = ma.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="mass">Mass (kg):</label>
                            <input type="number" id="mass" placeholder="Enter mass">
                        </div>
                        <div class="form-group">
                            <label for="acceleration">Acceleration (m/s²):</label>
                            <input type="number" id="acceleration" placeholder="Enter acceleration">
                        </div>
                        <button id="calculate-force" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "force-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-force")
              .addEventListener("click", function () {
                const mass = parseFloat(document.getElementById("mass").value);
                const acceleration = parseFloat(
                  document.getElementById("acceleration").value
                );
                const resultDiv = document.getElementById("force-result");

                if (isNaN(mass) || isNaN(acceleration)) {
                  resultDiv.innerHTML = "Please enter valid numbers";
                  return;
                }

                const force = mass * acceleration;
                resultDiv.innerHTML = `Force: <strong>${force.toFixed(
                  2
                )} N</strong>`;
              });
          },
        },
        {
          id: "gravitational-force-calculator",
          name: "Gravitational Force",
          description: "Calculate gravitational force between two masses.",
          generateHTML: function () {
            const inputs = `
                        <div class="form-group">
                            <label for="mass1">Mass 1 (kg):</label>
                            <input type="number" id="mass1" placeholder="Enter mass 1">
                        </div>
                        <div class="form-group">
                            <label for="mass2">Mass 2 (kg):</label>
                            <input type="number" id="mass2" placeholder="Enter mass 2">
                        </div>
                        <div class="form-group">
                            <label for="distance">Distance (m):</label>
                            <input type="number" id="distance" placeholder="Enter distance">
                        </div>
                        <button id="calculate-gravity" class="calculate-btn">Calculate</button>
                    `;
            return createCalculatorLayout(
              this.name,
              this.description,
              inputs,
              "gravity-result"
            );
          },
          attachEvents: function () {
            document
              .getElementById("calculate-gravity")
              .addEventListener("click", function () {
                const mass1 = parseFloat(document.getElementById("mass1").value);
                const mass2 = parseFloat(document.getElementById("mass2").value);
                const distance = parseFloat(
                  document.getElementById("distance").value
                );
                const resultDiv = document.getElementById("gravity-result");

                if (isNaN(mass1) || isNaN(mass2) || isNaN(distance)) {
                  resultDiv.innerHTML = "Please enter valid numbers";
                  return;
                }

                if (mass1 <= 0 || mass2 <= 0 || distance <= 0) {
                  resultDiv.innerHTML = "Values must be positive";
                  return;
                }

                const G = 6.6743e-11;
                const force = (G * (mass1 * mass2)) / (distance * distance);

                let formattedForce;
                if (force < 0.01) {
                  formattedForce = force.toExponential(4);
                } else {
                  formattedForce = force.toFixed(10);
                }

                resultDiv.innerHTML = `Force: <strong>${formattedForce} N</strong>`;
              });
          },
        },
      ],
    },
  },
  converters: {
    icon: "icon-converter",
    label: "Converters",
    subcategories: {
      area: [
        {
          id: "area-converter",
          name: "Area Converter",
          description: "Convert between various metric and imperial area units.",
          generateHTML: function () {
            const units = {
              sq_m: { label: "Square Meter (m²)", factor: 1 },
              sq_ft: { label: "Square Foot (ft²)", factor: 0.09290304 },
              sq_in: { label: "Square Inch (in²)", factor: 0.00064516 },
              sq_yd: { label: "Square Yard (yd²)", factor: 0.83612736 },
              sq_mi: { label: "Square Mile (mi²)", factor: 2589988.110336 },
              acre: { label: "Acre (ac)", factor: 4046.8564224 },
              are: { label: "Are (a)", factor: 100 },
              hectare: { label: "Hectare (ha)", factor: 10000 },
              decare: { label: "Decare (da)", factor: 1000 },
              sq_km: { label: "Square Kilometer (km²)", factor: 1e6 },
              sq_cm: { label: "Square Centimeter (cm²)", factor: 1e-4 },
              sq_dm: { label: "Square Decimeter (dm²)", factor: 1e-2 },
              sq_mm: { label: "Square Millimeter (mm²)", factor: 1e-6 },
              sq_um: { label: "Square Micrometer (µm²)", factor: 1e-12 },
              sq_nm: { label: "Square Nanometer (nm²)", factor: 1e-18 },
              sq_pm: { label: "Square Picometer (pm²)", factor: 1e-24 },
              sq_angstrom: { label: "Square Ångström (Å²)", factor: 1e-20 },
              sq_mil: { label: "Square Mil (mil²)", factor: 6.4516e-10 },
              cmil: { label: "Circular Mil (cmil)", factor: 5.06707479e-10 },
              kcmil: { label: "Kilo Circular Mil (kcmil)", factor: 5.06707479e-7 },
              soccer_field: { label: "Soccer Field", factor: 7140 },
            };

            // Generate options
            let options = "";
            for (const [key, unit] of Object.entries(units)) {
              options += `<option value="${key}">${unit.label}</option>`;
            }

            const inputs = `
                        <div class="form-group">
                            <label for="area-value">Value:</label>
                            <input type="number" id="area-value" placeholder="Enter area value">
                        </div>
                        <div class="form-group">
                            <label for="from-unit">From:</label>
                            <select id="from-unit">${options}</select>
                        </div>
                        <div class="form-group">
                            <label for="to-unit">To:</label>
                            <select id="to-unit">${options.replace(
                              'value="sq_m"',
                              'value="sq_m" selected'
                            )}</select>
                        </div>
                        <button id="calculate-area" class="calculate-btn">Convert</button>
                    `;

            // Q&A Section
            const qaSection = `
                        <div class="qa-section" style="margin-top: 2rem; font-size: 0.9rem; color: var(--text-secondary);">
                            <h4 style="color: var(--text-main); margin-bottom: 0.5rem;">Common Conversions & FAQ</h4>
                            <ul style="list-style: none; padding: 0;">
                                <li style="margin-bottom: 1rem;">
                                    <strong>What is the difference between are and acre?</strong><br>
                                    One <strong>are</strong> is equal to 100 m² (10m x 10m), while one <strong>acre</strong> equals approx. 4,047 m². <br>
                                    To convert acres to ares, multiply by <strong>40.4686</strong>. <br>
                                    <em>e.g., 6 acres ≈ 242.81 ares.</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong>How many square feet are in an acre?</strong><br>
                                    One acre is <strong>43,560 ft²</strong>.<br>
                                    <em>e.g., 0.25 acres = 10,890 ft².</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong>How many square miles are in an acre?</strong><br>
                                    There are <strong>0.0015625 mi²</strong> in 1 acre.<br>
                                    <em>e.g., 8 acres = 0.0125 mi².</em>
                                </li>
                                <li style="margin-bottom: 1rem;">
                                    <strong>What is 50 m² in yd²?</strong><br>
                                    Multiply m² by <strong>1.19599</strong>.<br>
                                    <em>e.g., 50 m² ≈ 59.8 yd².</em>
                                </li>
                            </ul>
                        </div>
                    `;

            // We append the Q&A to the result area or description?
            // The helper function puts description in left col, result in right.
            // Let's modify the helper or just append to the result content after render.
            // Actually, I can pass a custom layout, but using the helper is safer.
            // I'll append the Q&A section to the result div via the Result ID logic in attachEvents?
            // No, the helper returns a string. I can modify the helper return?
            // Simpler: I'll include the Q&A in the result HTML initially or just append it to the right column container?
            // The helper puts `resultId` inside `.calculator-results`.
            // I'll put the Q&A inside the "Description" or just inject it into the DOM.

            // Let's modify the return string manually since `createCalculatorLayout` is simple.
            // Or better, I'll put the Q&A in the `description` argument? No, that's for the top left.

            // I'll append the Q&A HTML to the RIGHT COLUMN content by modifying the helper result.
            // Wait, I can't easily modify the helper output string without regex.

            // Alternative: Add it to the "Inputs" column (Left) below the button?
            // "Calculated result text is on the right and the input button should be on the left."
            // So Inputs Left. Results Right. Q&A?
            // Q&A is static info. It fits well below the Result on the Right side.

            // Manual layout construction to include Q&A safely
            return `
        <div class="calculator-wrapper">
            <div class="calculator-inputs">
                <h3>Inputs</h3>
                <p class="calculator-description">${this.description}</p>
                <div class="calculator-form">
                    ${inputs}
                </div>
            </div>
            <div class="calculator-results">
                <h3>Result</h3>
                <div id="area-result" class="result-content">
                    <span style="opacity: 0.5; font-size: 1rem;">Enter values and click Calculate</span>
                </div>
                <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
                    ${qaSection}
                </div>
            </div>
        </div>
    `;
          },
          attachEvents: function () {
            document
              .getElementById("calculate-area")
              .addEventListener("click", function () {
                const value = parseFloat(
                  document.getElementById("area-value").value
                );
                const fromUnit = document.getElementById("from-unit").value;
                const toUnit = document.getElementById("to-unit").value;
                const resultDiv = document.getElementById("area-result");

                if (isNaN(value)) {
                  resultDiv.innerHTML = "Please enter a valid number";
                  return;
                }

                const units = {
                  sq_m: { label: "m²", factor: 1 },
                  sq_ft: { label: "ft²", factor: 0.09290304 },
                  sq_in: { label: "in²", factor: 0.00064516 },
                  sq_yd: { label: "yd²", factor: 0.83612736 },
                  sq_mi: { label: "mi²", factor: 2589988.110336 },
                  acre: { label: "ac", factor: 4046.8564224 },
                  are: { label: "a", factor: 100 },
                  hectare: { label: "ha", factor: 10000 },
                  decare: { label: "da", factor: 1000 },
                  sq_km: { label: "km²", factor: 1e6 },
                  sq_cm: { label: "cm²", factor: 1e-4 },
                  sq_dm: { label: "dm²", factor: 1e-2 },
                  sq_mm: { label: "mm²", factor: 1e-6 },
                  sq_um: { label: "µm²", factor: 1e-12 },
                  sq_nm: { label: "nm²", factor: 1e-18 },
                  sq_pm: { label: "pm²", factor: 1e-24 },
                  sq_angstrom: { label: "Å²", factor: 1e-20 },
                  sq_mil: { label: "mil²", factor: 6.4516e-10 },
                  cmil: { label: "cmil", factor: 5.06707479e-10 },
                  kcmil: { label: "kcmil", factor: 5.06707479e-7 },
                  soccer_field: { label: "Soccer Fields", factor: 7140 },
                };

                // Convert to base (m²) then to target
                const valueInM2 = value * units[fromUnit].factor;
                const result = valueInM2 / units[toUnit].factor;

                // Format logic: high precision for small numbers, normal for others
                let formattedResult;
                if (Math.abs(result) < 0.0001 && result !== 0) {
                    formattedResult = result.toExponential(6);
                } else if (Math.abs(result) > 1e9) {
                    formattedResult = result.toExponential(6);
                } else {
                    formattedResult = result.toLocaleString(undefined, { maximumFractionDigits: 6 });
                }

                resultDiv.innerHTML = `
                    <div style="font-size: 0.9em; opacity: 0.7;">${value} ${units[fromUnit].label} =</div>
                    <strong>${formattedResult} ${units[toUnit].label}</strong>
                `;
              });
          },
        },
      ],
    },
  },
};

// Navigation Functions
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
        // We will list calculators directly under the Category for simplicity,
        // OR we can add subcategory headers.
        // Given the requirement for "Minimalist", let's list them directly if the list is short,
        // or group them.
        // Let's group them by Subcategory for clarity.

        // Skip empty subcategories (like converters initially)
        if (!calcList || calcList.length === 0) continue;

        // Subcategory Label (Optional, but good for organization)
        // const subLabel = document.createElement('div');
        // subLabel.style.padding = "0.5rem 1.5rem";
        // subLabel.style.fontSize = "0.8rem";
        // subLabel.style.opacity = "0.5";
        // subLabel.textContent = subKey.charAt(0).toUpperCase() + subKey.slice(1);
        // catHeader.appendChild(subLabel);

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

function loadCalculator(category, subcategory, id) {
  // Update Active State
  document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));
  // Find the button that was clicked (approximate match or passed event? better to just re-query)
  // Simple hack: find button with text content match or store ID in DOM.
  // We'll leave visual active state update to the click handler context if possible,
  // but here we can just do a text match or store data attribute.
  const buttons = document.querySelectorAll(".nav-item");
  for (const btn of buttons) {
      if (btn.textContent === calculators[category].subcategories[subcategory].find(c => c.id === id).name) {
          btn.classList.add("active");
          break;
      }
  }

  const calc = calculators[category].subcategories[subcategory].find(c => c.id === id);
  if (!calc) return;

  currentCalculatorId = id;
  pageTitle.textContent = calc.name;

  // Close mobile sidebar
  sidebar.classList.remove("active");

  // Render Content
  calculatorDisplay.innerHTML = calc.generateHTML();
  calc.attachEvents();
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Close sidebar when clicking outside on mobile
document.addEventListener("click", (e) => {
    if (window.innerWidth <= 900) {
        if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target) && sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
        }
    }
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderSidebar();
});
