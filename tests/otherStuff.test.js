const otherStuff = require('../classes/otherStuff')

test('copies nested arrays and objects', () => {
  let obj = {
    a: {
      x: 1,
      y: 2,
    },
    b: [1,2,3],
    c: [[1,2,3],[4,5,6]],
  }
  expect(otherStuff.deepCopy(obj)).toEqual(obj);
});


test('array equality expect true', () => {
  let arr = [1,2,3,'a'];
  let arr2 = [1,2,3,'a'];
  expect(otherStuff.arraysEqual(arr, arr2)).toBeTruthy;
});

test('array equality expect false', () => {
  let arr = [1,2,3,'a'];
  let arr2 = [1,2,3,'b'];
  expect(otherStuff.arraysEqual(arr, arr2)).toBeFalsy;
});
