import { createCalculatorLayout, animateReveal } from './utils.js';

export const convertersCalculators = {
  icon: "icon-converter",
  label: "Converters",
  subcategories: {
    length: [
      {
        id: "length-converter",
        name: "Length Converter",
        description: "Convert between various metric and imperial length units.",
        educationalHTML: `
            <div class="qa-section" style="font-size: 0.9rem; color: var(--text-secondary);">
               <h4 style="color: var(--text-main); margin-bottom: 0.5rem;">Common Conversions</h4>
               <ul style="list-style: none; padding: 0;">
                   <li>1 Meter = 100 Centimeters</li>
                   <li>1 Kilometer = 1000 Meters</li>
                   <li>1 Inch = 2.54 Centimeters</li>
                   <li>1 Foot = 12 Inches</li>
                   <li>1 Yard = 3 Feet</li>
                   <li>1 Mile = 1.609 Kilometers</li>
               </ul>
            </div>
        `,
        generateHTML: function () {
            const units = [
                { value: "meter", label: "Meter" },
                { value: "kilometer", label: "Kilometer" },
                { value: "centimeter", label: "Centimeter" },
                { value: "millimeter", label: "Millimeter" },
                { value: "micrometer", label: "Micrometer" },
                { value: "nanometer", label: "Nanometer" },
                { value: "mile", label: "Mile" },
                { value: "yard", label: "Yard" },
                { value: "foot", label: "Foot" },
                { value: "inch", label: "Inch" },
                { value: "light_year", label: "Light Year" }
            ];

            let options = "";
            units.forEach(u => {
                options += `<option value="${u.value}">${u.label}</option>`;
            });

            const inputsHTML = `
                <div class="form-group">
                    <label for="length-from-value">From:</label>
                    <input type="number" id="length-from-value" value="2" placeholder="Enter length">
                </div>
                <div class="form-group">
                    <select id="length-from-unit" size="11" style="overflow-y: auto; height: 260px;">
                        ${options.replace('value="meter"', 'value="meter" selected')}
                    </select>
                </div>
                <div style="text-align: center; margin-top: 1rem;">
                    <button id="length-switch-btn" class="calculate-btn" style="width: auto; padding: 0.5rem 1rem;" title="Swap Units">
                        &#8646; Swap
                    </button>
                </div>
            `;

            return createCalculatorLayout(
                this.name,
                this.description,
                inputsHTML,
                "length-result-container",
                true
            );
        },
        attachEvents: function () {
            const unitsData = {
                meter: 1,
                kilometer: 1000,
                centimeter: 0.01,
                millimeter: 0.001,
                micrometer: 1e-6,
                nanometer: 1e-9,
                mile: 1609.344,
                yard: 0.9144,
                foot: 0.3048,
                inch: 0.0254,
                light_year: 9.4607e15
            };

            const unitLabels = {
                meter: "Meter",
                kilometer: "Kilometer",
                centimeter: "Centimeter",
                millimeter: "Millimeter",
                micrometer: "Micrometer",
                nanometer: "Nanometer",
                mile: "Mile",
                yard: "Yard",
                foot: "Foot",
                inch: "Inch",
                light_year: "Light Year"
            };

            const resultContainer = document.getElementById("length-result-container");

            // Build initial options for "To" list
            let toOptions = "";
            for (const [key, label] of Object.entries(unitLabels)) {
                toOptions += `<option value="${key}">${label}</option>`;
            }

            const toHTML = `
                <div class="form-group">
                    <label for="length-to-value" style="color: #fff;">To:</label>
                    <input type="number" id="length-to-value" style="background: #333; color: #fff; border: 1px solid #555;">
                </div>
                <div class="form-group">
                    <select id="length-to-unit" size="11" style="overflow-y: auto; background: #333; color: #fff; border: 1px solid #555; height: 260px;">
                        ${toOptions.replace('value="millimeter"', 'value="millimeter" selected')}
                    </select>
                </div>
                <div id="length-final-result" style="margin-top: 1rem; font-weight: bold; text-align: center; color: #fff;"></div>
            `;

            resultContainer.innerHTML = toHTML;
            // Remove the default Result header if possible, or style it?
            // The user wanted specific layout. I'll leave it as is for now.

            const fromValueInput = document.getElementById("length-from-value");
            const fromUnitSelect = document.getElementById("length-from-unit");
            const toValueInput = document.getElementById("length-to-value");
            const toUnitSelect = document.getElementById("length-to-unit");
            const switchBtn = document.getElementById("length-switch-btn");
            const finalResult = document.getElementById("length-final-result");

            const educationalBtn = document.getElementById("what-is-this-btn");
             if (educationalBtn && this.educationalHTML) {
                educationalBtn.addEventListener("click", () => {
                    const container = document.getElementById("educational-content-container");
                    animateReveal(this.educationalHTML, container);
                });
            }

            function formatListValue(num) {
                 if (num === 0) return 0;
                 if (Math.abs(num) < 1e-4 || Math.abs(num) > 1e6) {
                     return num.toExponential(10).replace(/e\+?/, 'E');
                 }
                 return parseFloat(num.toPrecision(10));
            }

            function updateTo() {
                const val = parseFloat(fromValueInput.value);
                const fromUnit = fromUnitSelect.value;
                const toUnit = toUnitSelect.value;

                if (isNaN(val)) {
                    toValueInput.value = "";
                    finalResult.textContent = "";
                    Array.from(toUnitSelect.options).forEach(opt => {
                         const u = opt.value;
                         opt.textContent = unitLabels[u];
                    });
                    return;
                }

                const baseMeters = val * unitsData[fromUnit];

                // Update To Input
                const resultVal = baseMeters / unitsData[toUnit];
                toValueInput.value = resultVal;

                // Update To List
                Array.from(toUnitSelect.options).forEach(opt => {
                    const u = opt.value;
                    const converted = baseMeters / unitsData[u];
                    opt.textContent = `${unitLabels[u]} (${formatListValue(converted)})`;
                });

                finalResult.textContent = `${val} ${unitLabels[fromUnit]} = ${resultVal} ${unitLabels[toUnit]}`;
            }

            function updateFrom() {
                 const val = parseFloat(toValueInput.value);
                 const fromUnit = fromUnitSelect.value;
                 const toUnit = toUnitSelect.value;

                 if (isNaN(val)) {
                     fromValueInput.value = "";
                     finalResult.textContent = "";
                     // Should we clear list values? Probably not, or set to 0?
                     // If input is empty, maybe show (0)?
                     return;
                 }

                 const baseMeters = val * unitsData[toUnit];
                 const resultVal = baseMeters / unitsData[fromUnit];
                 fromValueInput.value = resultVal;

                 Array.from(toUnitSelect.options).forEach(opt => {
                    const u = opt.value;
                    const converted = baseMeters / unitsData[u];
                    opt.textContent = `${unitLabels[u]} (${formatListValue(converted)})`;
                });

                finalResult.textContent = `${resultVal} ${unitLabels[fromUnit]} = ${val} ${unitLabels[toUnit]}`;
            }

            function swap() {
                const oldFromUnit = fromUnitSelect.value;
                const oldToUnit = toUnitSelect.value;

                fromUnitSelect.value = oldToUnit;
                toUnitSelect.value = oldFromUnit;

                updateTo();
            }

            fromValueInput.addEventListener("input", updateTo);
            fromUnitSelect.addEventListener("change", updateTo);
            toValueInput.addEventListener("input", updateFrom);
            toUnitSelect.addEventListener("change", updateTo);
            switchBtn.addEventListener("click", swap);

            updateTo();
        }
      },

        ],
    area: [
      {
        id: "area-converter",
        name: "Area Converter",
        description: "Convert between various metric and imperial area units.",
        educationalHTML: `
            <div class="qa-section" style="font-size: 0.9rem; color: var(--text-secondary);">
                <h4 style="color: var(--text-main); margin-bottom: 0.5rem;">Common Conversions & FAQ</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 1rem;">
                        <strong>What is the difference between are and acre?</strong><br>
                        One <strong>are</strong> is equal to \\( 100 \\, \\text{m}^2 \\) (\\( 10\\text{m} \\times 10\\text{m} \\)), while one <strong>acre</strong> equals approx. \\( 4,047 \\, \\text{m}^2 \\). <br>
                        To convert acres to ares, multiply by \\( 40.4686 \\). <br>
                        <em>e.g., \\( 6 \\text{ acres} \\approx 242.81 \\text{ ares} \\).</em>
                    </li>
                    <li style="margin-bottom: 1rem;">
                        <strong>How many square feet are in an acre?</strong><br>
                        One acre is \\( 43,560 \\, \\text{ft}^2 \\).<br>
                        <em>e.g., \\( 0.25 \\text{ acres} = 10,890 \\, \\text{ft}^2 \\).</em>
                    </li>
                    <li style="margin-bottom: 1rem;">
                        <strong>How many square miles are in an acre?</strong><br>
                        There are \\( 0.0015625 \\, \\text{mi}^2 \\) in 1 acre.<br>
                        <em>e.g., \\( 8 \\text{ acres} = 0.0125 \\, \\text{mi}^2 \\).</em>
                    </li>
                    <li style="margin-bottom: 1rem;">
                        <strong>What is 50 m² in yd²?</strong><br>
                        Multiply \\( \\text{m}^2 \\) by \\( 1.19599 \\).<br>
                        <em>e.g., \\( 50 \\, \\text{m}^2 \\approx 59.8 \\, \\text{yd}^2 \\).</em>
                    </li>
                </ul>
            </div>
        `,
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

          return createCalculatorLayout(
            this.name,
            this.description,
            inputs,
            "area-result",
            true // Enable "What is this?" button
          );
        },
        attachEvents: function () {
            // Attach "What is this?" event
            const whatIsThisBtn = document.getElementById("what-is-this-btn");
            if (whatIsThisBtn && this.educationalHTML) {
                whatIsThisBtn.addEventListener("click", () => {
                    const container = document.getElementById("educational-content-container");
                    animateReveal(this.educationalHTML, container);
                });
            }

            const calculate = () => {
              const value = parseFloat(
                document.getElementById("area-value").value
              );
              const fromUnit = document.getElementById("from-unit").value;
              const toUnit = document.getElementById("to-unit").value;
              const resultDiv = document.getElementById("area-result");

              if (isNaN(value)) {
                resultDiv.innerHTML = '<span style="opacity: 0.5;">Enter value...</span>';
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
            };

            document.getElementById("calculate-area").addEventListener("click", calculate);
            document.getElementById("area-value").addEventListener("input", calculate);
            document.getElementById("from-unit").addEventListener("change", calculate);
            document.getElementById("to-unit").addEventListener("change", calculate);
        },
      },
    ],
  },
};
