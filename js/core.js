import { mathCalculators } from './math.js';
import { physicsCalculators } from './physics.js';
import { convertersCalculators } from './converters.js';
import { initializeUI } from './ui.js';

const calculators = {
    math: mathCalculators,
    physics: physicsCalculators,
    converters: convertersCalculators
};

document.addEventListener("DOMContentLoaded", () => {
    initializeUI(calculators);
});
