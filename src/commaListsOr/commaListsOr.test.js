import commaListsOr from './commaListsOr';
import { readFromFixture } from '../testUtils';

const val = 'amaze';

test('includes arrays as comma-separated list with "or"', () => {
  const fruits = ['apple', 'banana', 'kiwi'];
  const expected = readFromFixture(__dirname, 'commaListsOr');
  const actual = commaListsOr`
    Doge <3's these fruits: ${fruits}
    they are ${val}
  `;
  expect(actual).toBe(expected);
});

test('only returns the first item of a single element array', () => {
  const fruits = ['apple'];
  const expected = readFromFixture(__dirname, 'commaListsOrSingleItem');
  const actual = commaListsOr`
    Doge <3's these fruits: ${fruits}
    they are ${val}
  `;
  expect(actual).toBe(expected);
});
