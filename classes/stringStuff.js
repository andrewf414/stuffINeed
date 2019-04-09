"use strict";

class StringStuff {
  
  // Find and replace in a string
  static findAndReplace(pattern, str, replacement) {
    return str.replace(pattern, replacement);
  }

  //#region Change Cases
  /**
   * Returns string in Title Case
   * @param {string} str 
   */
  static toTitleCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i=0, n=words.length; i<n; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

  /**
   * Returns string in camelCase
   * @param {string} str 
   */
  static toCamelCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i=1, n=words.length; i<n; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  }

  /**
   * Returns string in PascalCase
   * @param {string} str 
   */
  static toPascalCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i=0, n=words.length; i<n; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join('');
  }

  /**
   * Returs string in moCkiNgcAse
   * @param {string} str 
   */
  static toMockingCase(str) {
    let s = str.split('');
    for (let i = 0; i < s.length; i++) {
      if (i % 3 === 0) {
        s[i] = s[i].toUpperCase();
      } else {
        s[i] = s[i].toLowerCase();
      }
    }
    return s;
  }

  //#endregion

  //#region Sentences

  /**
   * returns a string truncated to number of chars, including ... if ellipsis is true
   * @param {string} str 
   * @param {number} maxchars 
   * @param {boolean} ellipsis include ... at the end or not default = true
   */
  static truncate(str, maxchars, ellipsis = true) {
    if (ellipsis && str.length > maxchars) {
      return str.slice(0,maxchars-3) + '...';
    }
    str.slice(0,maxchars);
  }

  //#endregion
}

module.exports = StringStuff;