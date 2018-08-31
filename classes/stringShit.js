"use strict";

class StringShit {
  // Find and replace in a string
  static findAndReplace(pattern, str, replacement) {
    return str.replace(pattern, replacement);
  }

  // Convert string to Title Case
  static toTitleCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i=0, n=words.length; i<n; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

  // Convert string to camelCase
  static toCamelCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i=1, n=words.length; i<n; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  }

  // Convert string to PascalCase
  static toPascalCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i=0, n=words.length; i<n; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  }

  // base64 encode
  // node only
  static base64Encode(str) {
    return Buffer.from(str, 'utf8').toString('base64');
  }

  static testFn() {
    console.log('string worked');
  }
}

module.exports = StringShit;