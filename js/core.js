import { mathCalculators } from './math.js';
import { physicsCalculators } from './physics.js';
import { convertersCalculators } from './converters.js';
import { chemistryCalculators } from './chemistry.js';
import { initializeUI } from './ui.js';

const calculators = {
    math: mathCalculators,
    physics: physicsCalculators,
    chemistry: chemistryCalculators,
    converters: convertersCalculators
};

document.addEventListener("DOMContentLoaded", () => {
    initializeUI(calculators);
});
