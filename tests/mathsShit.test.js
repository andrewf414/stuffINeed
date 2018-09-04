const mathsShit = require('../classes/mathsShit')

test('sums [1,2,3] to equal 6', () => {
  expect(mathsShit.sum([1,2,3])).toBe(6);
});

test('avg [1,2,3] to equal 2', () => {
  expect(mathsShit.avg([1,2,3])).toBe(2);
});

test('even (2) to equal true', () => {
  expect(mathsShit.even(2)).toBe(true);
});
test('even (3) to equal false', () => {
  expect(mathsShit.even(3)).toBe(false);
});

test('odd (3) to equal true', () => {
  expect(mathsShit.odd(3)).toBe(true);
});
test('odd (2) to equal true', () => {
  expect(mathsShit.odd(2)).toBe(false);
});

test('degsToRads (60) to equal PI/3', () => {
  expect(mathsShit.degsToRads(60)).toBe(Math.PI/3);
});

test('radsToDegs (PI/6) to equal 30', () => {
  expect(mathsShit.radsToDegs(Math.PI/6)).toBe(30);
});

test('prime (7) to equal true', () => {
  expect(mathsShit.prime(7)).toBe(true);
});
test('prime (6) to equal false', () => {
  expect(mathsShit.prime(6)).toBe(false);
});