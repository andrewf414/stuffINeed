"use strict";

class StringStuff {
  
  // Find and replace in a string
  static findAndReplace(pattern, str, replacement) {
    return str.replace(pattern, replacement);
  }

  //#region Change Cases
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
  //#endregion

  //#region Sentences
  static truncate(str, maxchars, ellipsis = true) {
    if (ellipsis) {
      return str.slice(0,maxchars-3) + '...';
    }
    str.slice(0,maxchars);
  }
  //#endregion

  static testFn() {
    console.log('string worked');
  }
}

module.exports = StringStuff;