import test from 'node:test';
import assert from 'node:assert/strict';
import { splitShoppingInputLines } from '../src/spiskammer-utils.js';

test('splitShoppingInputLines turns each non-empty line into its own item', () => {
  const input = 'Fiskeboller\nMild karri\nMushrooms';

  assert.deepEqual(splitShoppingInputLines(input), ['Fiskeboller', 'Mild karri', 'Mushrooms']);
});

test('splitShoppingInputLines trims lines and ignores blanks', () => {
  const input = '  Fiskeboller  \n\n Mild karri \r\n  \nMushrooms';

  assert.deepEqual(splitShoppingInputLines(input), ['Fiskeboller', 'Mild karri', 'Mushrooms']);
});
