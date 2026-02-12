import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateTimePercentage } from './mathUtils.js';

test('calculateTimePercentage - valid inputs', () => {
  const result = calculateTimePercentage(100, 25);
  assert.strictEqual(result.percentageElapsed, 25);
  assert.strictEqual(result.percentageRemaining, 75);
});

test('calculateTimePercentage - boundary: elapsed is 0', () => {
  const result = calculateTimePercentage(100, 0);
  assert.strictEqual(result.percentageElapsed, 0);
  assert.strictEqual(result.percentageRemaining, 100);
});

test('calculateTimePercentage - boundary: elapsed equals total', () => {
  const result = calculateTimePercentage(50, 50);
  assert.strictEqual(result.percentageElapsed, 100);
  assert.strictEqual(result.percentageRemaining, 0);
});

test('calculateTimePercentage - error: total time is 0', () => {
  assert.throws(() => calculateTimePercentage(0, 0), {
    message: 'Total time must be greater than zero'
  });
});

test('calculateTimePercentage - error: total time is negative', () => {
  assert.throws(() => calculateTimePercentage(-10, 0), {
    message: 'Total time must be greater than zero'
  });
});

test('calculateTimePercentage - error: elapsed time is negative', () => {
  assert.throws(() => calculateTimePercentage(100, -5), {
    message: 'Elapsed time must be between 0 and total time'
  });
});

test('calculateTimePercentage - error: elapsed exceeds total', () => {
  assert.throws(() => calculateTimePercentage(100, 105), {
    message: 'Elapsed time must be between 0 and total time'
  });
});

test('calculateTimePercentage - error: NaN inputs', () => {
  assert.throws(() => calculateTimePercentage(NaN, 50), {
    message: 'Please enter valid numbers'
  });
  assert.throws(() => calculateTimePercentage(100, NaN), {
    message: 'Please enter valid numbers'
  });
});
