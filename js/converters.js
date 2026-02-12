import { createCalculatorLayout, animateReveal } from './utils.js';

export const convertersCalculators = {
  icon: "icon-converter",
  label: "Converters",
  subcategories: {
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
};
