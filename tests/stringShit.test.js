const stringShit = require('../classes/stringShit')

test('toTitleCase (\'this Is it\') to equal This Is It', () => {
  expect(stringShit.toTitleCase('this Is it')).toBe('This Is It');
});

test('toCamelCase (\'this Is it\') to equal thisIsIt', () => {
  expect(stringShit.toCamelCase('this Is it')).toBe('thisIsIt');
});

test('toPascalCase (\'this Is it\') to equal ThisIsIt', () => {
  expect(stringShit.toPascalCase('this Is it')).toBe('ThisIsIt');
});