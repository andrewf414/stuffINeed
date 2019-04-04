const mathsStuff = require('../classes/mathsStuff')

test('sums [1,2,3] to equal 6', () => {
  expect(mathsStuff.sum([1,2,3])).toBe(6);
});

test('avg [1,2,3] to equal 2', () => {
  expect(mathsStuff.avg([1,2,3])).toBe(2);
});

describe('Check even works', () => {
  test('even (2) to equal true', () => {
    expect(mathsStuff.even(2)).toBe(true);
  });
  test('even (3) to equal false', () => {
    expect(mathsStuff.even(3)).toBe(false);
  });
})

describe('Check odd works', () => {
  test('odd (3) to equal true', () => {
    expect(mathsStuff.odd(3)).toBe(true);
  });
  test('odd (2) to equal true', () => {
    expect(mathsStuff.odd(2)).toBe(false);
  });
})

test('degsToRads (60) to equal PI/3', () => {
  expect(mathsStuff.degsToRads(60)).toBe(Math.PI/3);
});

test('radsToDegs (PI/6) to equal 30', () => {
  expect(mathsStuff.radsToDegs(Math.PI/6)).toBe(30);
});

test('prime (7) to equal true', () => {
  expect(mathsStuff.prime(7)).toBe(true);
});
test('prime (6) to equal false', () => {
  expect(mathsStuff.prime(6)).toBe(false);
});