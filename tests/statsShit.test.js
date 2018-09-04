const statssShit = require('../classes/statsShit')

test('mean [1,2,3,4,5,6,7,8,9] to equal 45', () => {
  expect(statssShit.mean([1,2,3,4,5,6,7,8,9])).toBe(5);
});

test('median [1,2,3,4,5,6,7,8,9] to equal 2', () => {
  expect(statssShit.median([1,2,3,4,5,6,7,8,9])).toBe(5);
});

test('mode [1,2,3,4,5,6,6,6,9] to equal [6]', () => {
  expect(statssShit.mode([1,2,3,4,5,6,6,6,9])).toEqual([6]);
});

test('stddev [1,2,3,4,5,6,7,8,9] to equal 2.74', () => {
  expect(parseFloat(statssShit.stddev([1,2,3,4,5,6,7,8,9]).toFixed(2))).toEqual(2.74);
});
test('stddev ([1,2,3,4,5,6,7,8,9], true) to equal 2.58', () => {
  expect(parseFloat(statssShit.stddev([1,2,3,4,5,6,7,8,9], true).toFixed(2))).toEqual(2.58);
});