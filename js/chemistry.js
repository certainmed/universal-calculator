import { createCalculatorLayout, animateReveal } from './utils.js';

const elements = [
  null, // 0 index filler
  { name: "Hydrogen", symbol: "H" }, { name: "Helium", symbol: "He" }, { name: "Lithium", symbol: "Li" }, { name: "Beryllium", symbol: "Be" },
  { name: "Boron", symbol: "B" }, { name: "Carbon", symbol: "C" }, { name: "Nitrogen", symbol: "N" }, { name: "Oxygen", symbol: "O" },
  { name: "Fluorine", symbol: "F" }, { name: "Neon", symbol: "Ne" }, { name: "Sodium", symbol: "Na" }, { name: "Magnesium", symbol: "Mg" },
  { name: "Aluminium", symbol: "Al" }, { name: "Silicon", symbol: "Si" }, { name: "Phosphorus", symbol: "P" }, { name: "Sulfur", symbol: "S" },
  { name: "Chlorine", symbol: "Cl" }, { name: "Argon", symbol: "Ar" }, { name: "Potassium", symbol: "K" }, { name: "Calcium", symbol: "Ca" },
  { name: "Scandium", symbol: "Sc" }, { name: "Titanium", symbol: "Ti" }, { name: "Vanadium", symbol: "V" }, { name: "Chromium", symbol: "Cr" },
  { name: "Manganese", symbol: "Mn" }, { name: "Iron", symbol: "Fe" }, { name: "Cobalt", symbol: "Co" }, { name: "Nickel", symbol: "Ni" },
  { name: "Copper", symbol: "Cu" }, { name: "Zinc", symbol: "Zn" }, { name: "Gallium", symbol: "Ga" }, { name: "Germanium", symbol: "Ge" },
  { name: "Arsenic", symbol: "As" }, { name: "Selenium", symbol: "Se" }, { name: "Bromine", symbol: "Br" }, { name: "Krypton", symbol: "Kr" },
  { name: "Rubidium", symbol: "Rb" }, { name: "Strontium", symbol: "Sr" }, { name: "Yttrium", symbol: "Y" }, { name: "Zirconium", symbol: "Zr" },
  { name: "Niobium", symbol: "Nb" }, { name: "Molybdenum", symbol: "Mo" }, { name: "Technetium", symbol: "Tc" }, { name: "Ruthenium", symbol: "Ru" },
  { name: "Rhodium", symbol: "Rh" }, { name: "Palladium", symbol: "Pd" }, { name: "Silver", symbol: "Ag" }, { name: "Cadmium", symbol: "Cd" },
  { name: "Indium", symbol: "In" }, { name: "Tin", symbol: "Sn" }, { name: "Antimony", symbol: "Sb" }, { name: "Tellurium", symbol: "Te" },
  { name: "Iodine", symbol: "I" }, { name: "Xenon", symbol: "Xe" }, { name: "Cesium", symbol: "Cs" }, { name: "Barium", symbol: "Ba" },
  { name: "Lanthanum", symbol: "La" }, { name: "Cerium", symbol: "Ce" }, { name: "Praseodymium", symbol: "Pr" }, { name: "Neodymium", symbol: "Nd" },
  { name: "Promethium", symbol: "Pm" }, { name: "Samarium", symbol: "Sm" }, { name: "Europium", symbol: "Eu" }, { name: "Gadolinium", symbol: "Gd" },
  { name: "Terbium", symbol: "Tb" }, { name: "Dysprosium", symbol: "Dy" }, { name: "Holmium", symbol: "Ho" }, { name: "Erbium", symbol: "Er" },
  { name: "Thulium", symbol: "Tm" }, { name: "Ytterbium", symbol: "Yb" }, { name: "Lutetium", symbol: "Lu" }, { name: "Hafnium", symbol: "Hf" },
  { name: "Tantalum", symbol: "Ta" }, { name: "Tungsten", symbol: "W" }, { name: "Rhenium", symbol: "Re" }, { name: "Osmium", symbol: "Os" },
  { name: "Iridium", symbol: "Ir" }, { name: "Platinum", symbol: "Pt" }, { name: "Gold", symbol: "Au" }, { name: "Mercury", symbol: "Hg" },
  { name: "Thallium", symbol: "Tl" }, { name: "Lead", symbol: "Pb" }, { name: "Bismuth", symbol: "Bi" }, { name: "Polonium", symbol: "Po" },
  { name: "Astatine", symbol: "At" }, { name: "Radon", symbol: "Rn" }, { name: "Francium", symbol: "Fr" }, { name: "Radium", symbol: "Ra" },
  { name: "Actinium", symbol: "Ac" }, { name: "Thorium", symbol: "Th" }, { name: "Protactinium", symbol: "Pa" }, { name: "Uranium", symbol: "U" },
  { name: "Neptunium", symbol: "Np" }, { name: "Plutonium", symbol: "Pu" }, { name: "Americium", symbol: "Am" }, { name: "Curium", symbol: "Cm" },
  { name: "Berkelium", symbol: "Bk" }, { name: "Californium", symbol: "Cf" }, { name: "Einsteinium", symbol: "Es" }, { name: "Fermium", symbol: "Fm" },
  { name: "Mendelevium", symbol: "Md" }, { name: "Nobelium", symbol: "No" }, { name: "Lawrencium", symbol: "Lr" }, { name: "Rutherfordium", symbol: "Rf" },
  { name: "Dubnium", symbol: "Db" }, { name: "Seaborgium", symbol: "Sg" }, { name: "Bohrium", symbol: "Bh" }, { name: "Hassium", symbol: "Hs" },
  { name: "Meitnerium", symbol: "Mt" }, { name: "Darmstadtium", symbol: "Ds" }, { name: "Roentgenium", symbol: "Rg" }, { name: "Copernicium", symbol: "Cn" },
  { name: "Nihonium", symbol: "Nh" }, { name: "Flerovium", symbol: "Fl" }, { name: "Moscovium", symbol: "Mc" }, { name: "Livermorium", symbol: "Lv" },
  { name: "Tennessine", symbol: "Ts" }, { name: "Oganesson", symbol: "Og" }
];

export const chemistryCalculators = {
  icon: "icon-chemistry",
  label: "Chemistry",
  subcategories: {
    atomic: [
      {
        id: "atom-calculator",
        name: "Atom Calculator",
        description: "Calculate atomic number, mass number, and charge from protons, neutrons, and electrons.",
        educationalHTML: `
            <div class="educational-section">
                <h3>Definitions</h3>
                <ul>
                    <li><strong>Atom:</strong> The smallest constituent unit of matter that retains the properties of an element.</li>
                    <li><strong>Atom components:</strong> Positively-charged protons (p) and neutral neutrons (n) in the nucleus, with negatively-charged electrons (e) orbiting.</li>
                    <li><strong>Atomic number (Z):</strong> The number of protons. Identifies the element.</li>
                    <li><strong>Mass number (A):</strong> The sum of protons and neutrons.</li>
                </ul>

                <h3>Equations</h3>
                <p>If you know Z, A, and charge (z):</p>
                \\[ p = Z \\]
                \\[ n = A - Z \\]
                \\[ e = Z - z \\]

                <p>If you know p, n, and e:</p>
                \\[ Z = p \\]
                \\[ A = p + n \\]
                \\[ z = p - e \\]

                <h3>Ions</h3>
                <p><strong>Cation:</strong> Positively charged (more protons than electrons).</p>
                <p><strong>Anion:</strong> Negatively charged (more electrons than protons).</p>
            </div>
        `,
        generateHTML: function () {
            // Two columns for inputs: Standard vs Composition
            const inputs = `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-secondary);">Properties</h4>
                        <div class="form-group">
                            <label for="atom-z">Atomic Number (Z):</label>
                            <input type="number" id="atom-z" placeholder="e.g. 11">
                        </div>
                        <div class="form-group">
                            <label for="atom-a">Mass Number (A):</label>
                            <input type="number" id="atom-a" placeholder="e.g. 23">
                        </div>
                        <div class="form-group">
                            <label for="atom-charge">Charge (z):</label>
                            <input type="number" id="atom-charge" placeholder="e.g. 0">
                        </div>
                    </div>
                    <div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--text-secondary);">Composition</h4>
                        <div class="form-group">
                            <label for="atom-p">Protons (p):</label>
                            <input type="number" id="atom-p" placeholder="e.g. 11">
                        </div>
                        <div class="form-group">
                            <label for="atom-n">Neutrons (n):</label>
                            <input type="number" id="atom-n" placeholder="e.g. 12">
                        </div>
                        <div class="form-group">
                            <label for="atom-e">Electrons (e):</label>
                            <input type="number" id="atom-e" placeholder="e.g. 11">
                        </div>
                    </div>
                </div>
            `;
            return createCalculatorLayout(
                this.name,
                this.description,
                inputs,
                "atom-result",
                true
            );
        },
        attachEvents: function () {
            const btn = document.getElementById("what-is-this-btn");
            if (btn) {
                btn.addEventListener("click", () => {
                    animateReveal(this.educationalHTML, document.getElementById("educational-content-container"));
                });
            }

            const inputs = {
                z: document.getElementById("atom-z"),
                a: document.getElementById("atom-a"),
                charge: document.getElementById("atom-charge"),
                p: document.getElementById("atom-p"),
                n: document.getElementById("atom-n"),
                e: document.getElementById("atom-e")
            };

            const resultDiv = document.getElementById("atom-result");

            const updateResult = () => {
                const z = parseInt(inputs.z.value);
                const a = parseInt(inputs.a.value);

                // Element Lookup
                let elementInfo = "Unknown Element";
                let symbol = "X";
                if (z > 0 && z < elements.length) {
                    elementInfo = elements[z].name;
                    symbol = elements[z].symbol;
                }

                if (isNaN(z)) {
                    resultDiv.innerHTML = '<span style="opacity: 0.5; font-size: 1rem;">Enter values...</span>';
                    return;
                }

                // AZE Notation Logic
                //   A
                //     Sy
                //   Z
                const azeHtml = `
                    <div style="display: inline-block; text-align: left; vertical-align: middle; line-height: 1;">
                        <div style="font-size: 0.8em; margin-bottom: 2px;">${!isNaN(a) ? a : '?'}</div>
                        <div style="font-size: 0.8em;">${z}</div>
                    </div>
                    <div style="display: inline-block; font-size: 2em; font-weight: bold; vertical-align: middle; margin-left: 0.2rem;">${symbol}</div>
                `;

                resultDiv.innerHTML = `
                    <div style="margin-bottom: 1rem;">
                        Your element is <strong>${elementInfo}</strong>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        AZE Notation:<br>
                        ${azeHtml}
                    </div>
                    <div>
                        Mass Number (A): <strong>${!isNaN(a) ? a : '-'}</strong>
                    </div>
                `;
            };

            // Bidirectional Logic
            let isUpdating = false;

            const updateFromProperties = () => {
                if (isUpdating) return;
                isUpdating = true;

                const z = parseInt(inputs.z.value);
                const a = parseInt(inputs.a.value);
                const charge = parseInt(inputs.charge.value);

                // Need Z to calculate anything useful usually
                if (!isNaN(z)) {
                    inputs.p.value = z; // p = Z

                    if (!isNaN(a)) {
                        inputs.n.value = a - z; // n = A - Z
                    } else {
                        inputs.n.value = "";
                    }

                    if (!isNaN(charge)) {
                        inputs.e.value = z - charge; // e = Z - z
                    } else {
                         // If no charge entered, assume 0? The prompt says "In case of uncharged atoms...".
                         // If charge is empty, maybe don't calculate electrons yet? Or assume neutral?
                         // Let's leave e blank if charge blank.
                         inputs.e.value = "";
                    }
                } else {
                    inputs.p.value = "";
                    inputs.n.value = "";
                    inputs.e.value = "";
                }

                updateResult();
                isUpdating = false;
            };

            const updateFromComposition = () => {
                if (isUpdating) return;
                isUpdating = true;

                const p = parseInt(inputs.p.value);
                const n = parseInt(inputs.n.value);
                const e = parseInt(inputs.e.value);

                if (!isNaN(p)) {
                    inputs.z.value = p; // Z = p

                    if (!isNaN(n)) {
                        inputs.a.value = p + n; // A = p + n
                    } else {
                        inputs.a.value = "";
                    }

                    if (!isNaN(e)) {
                        inputs.charge.value = p - e; // z = p - e
                    } else {
                        inputs.charge.value = "";
                    }
                } else {
                     inputs.z.value = "";
                     inputs.a.value = "";
                     inputs.charge.value = "";
                }

                updateResult();
                isUpdating = false;
            };

            // Attach listeners
            ['z', 'a', 'charge'].forEach(id => {
                inputs[id].addEventListener('input', updateFromProperties);
            });

            ['p', 'n', 'e'].forEach(id => {
                inputs[id].addEventListener('input', updateFromComposition);
            });
        }
      }
    ]
  }
};
