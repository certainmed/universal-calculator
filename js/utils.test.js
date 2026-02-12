import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createCalculatorLayout } from './utils.js';

test('createCalculatorLayout - includes title in h2', () => {
    const title = 'Test Calculator';
    const description = 'A test description';
    const inputs = '<input />';
    const resultId = 'test-result';

    const html = createCalculatorLayout(title, description, inputs, resultId);

    // Check for the title inside an h2 with tabindex
    assert.ok(html.includes('<h2 tabindex="-1">Test Calculator</h2>'), 'HTML should contain h2 with title and tabindex="-1"');
});
