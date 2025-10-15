const { calculateRICE } = require('./rice');

test('calculates RICE correctly for integer inputs', () => {
  const val = calculateRICE({ reach: 100, impact: 3, confidence: 0.8, effort: 5 });
  expect(val).toBeCloseTo((100 * 3 * 0.8) / 5);
});

test('throws on zero effort', () => {
  expect(() => calculateRICE({ reach: 10, impact: 2, confidence: 1, effort: 0 })).toThrow();
});
