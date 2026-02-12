import { createCalculatorLayout } from './utils.js';

export const physicsCalculators = {
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
          // TODO: Add educational text here
          return createCalculatorLayout(
            this.name,
            this.description,
            inputs,
            "projectile-result",
            false
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
          // TODO: Add educational text here
          return createCalculatorLayout(
            this.name,
            this.description,
            inputs,
            "free-fall-result",
            false
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
          // TODO: Add educational text here
          return createCalculatorLayout(
            this.name,
            this.description,
            inputs,
            "force-result",
            false
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
          // TODO: Add educational text here
          return createCalculatorLayout(
            this.name,
            this.description,
            inputs,
            "gravity-result",
            false
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
};
