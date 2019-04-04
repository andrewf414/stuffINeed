const stringStuff = require('../classes/stringStuff')

test('toTitleCase (\'this Is it\') to equal This Is It', () => {
  expect(stringStuff.toTitleCase('this Is it')).toBe('This Is It');
});

test('toCamelCase (\'this Is it\') to equal thisIsIt', () => {
  expect(stringStuff.toCamelCase('this Is it')).toBe('thisIsIt');
});

test('toPascalCase (\'this Is it\') to equal ThisIsIt', () => {
  expect(stringStuff.toPascalCase('this Is it')).toBe('ThisIsIt');
});