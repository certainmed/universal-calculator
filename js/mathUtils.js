/**
 * Calculates the percentage of time elapsed and remaining.
 * @param {number} totalTime - The total time.
 * @param {number} elapsedTime - The elapsed time.
 * @returns {Object} An object containing percentageElapsed and percentageRemaining.
 * @throws {Error} If inputs are invalid.
 */
export function calculateTimePercentage(totalTime, elapsedTime) {
  if (isNaN(totalTime) || isNaN(elapsedTime)) {
    throw new Error("Please enter valid numbers");
  }

  if (totalTime <= 0) {
    throw new Error("Total time must be greater than zero");
  }

  if (elapsedTime < 0 || elapsedTime > totalTime) {
    throw new Error("Elapsed time must be between 0 and total time");
  }

  const percentageElapsed = (elapsedTime / totalTime) * 100;
  const percentageRemaining = 100 - percentageElapsed;

  return {
    percentageElapsed,
    percentageRemaining
  };
}
