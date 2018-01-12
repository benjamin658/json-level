import test from 'ava';

import jsonLevel from './src';

const level1 = { a: 1 };
const level2 = { b: level1 };
const level3 = { c: level2 };

test('Should return correct level of object', t => {
  t.is(jsonLevel(level1), 1);
  t.is(jsonLevel(level2), 2);
  t.is(jsonLevel(level3), 3);
});