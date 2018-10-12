const timeShit = require('../classes/timeShit')

test('subtractDays', () => {
  expect(timeShit.subtractDays(new Date(2018,8,4,11,11,11), 10, true)).toEqual(new Date(2018,7,25,0,0,0));
});

test('addDays (Date(2018,8,25,11,11,11), 10, true) to equal Date(2018,9,5,0,0,0)', () => {
  expect(timeShit.addDays(new Date(2018,8,25,11,11,11), 10, true)).toEqual(new Date(2018,9,5,0,0,0));
});

test('longDay (6) to equal Saturday', () => {
  expect(timeShit.longDay(6)).toEqual('Saturday');
});

// test('timeBetween', () => {
//   expect(timeShit.subtractDays()).toBe();
// });