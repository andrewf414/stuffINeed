"use strict";

class otherShit {
  static deepCopyObject(obj) {
    if (typeof(obj) !== 'object') {
      return a = obj;
    }
    let newObj = {};
    for (let key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  }
  
  // Make a deep copy of an object or array
  static deepCopy(obj) {
    const isArray = Array.isArray(obj);
    if (isArray) {
      let newArr = [];
      for (let i=0, n=obj.length; i<n; i++) {
        newArr.push(this.deepCopyObject(obj[i]));
      }
      return newArr;
    }
    let newObj = {};
    for (let key in obj) {
      newObj[key] = obj[key];
    }
    return newObj;
  }

  static isEqual(a, b) {
    if (typeof(a) !== typeof(b)) return false;
    if (typeof(a) === 'object') {
      if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for (let i=0, n=a.length; i<n; i++) {
          if (a[i] !== b[i]) return false;
        }
      }
      for (let key in a) {
        if (a[key] !== b[key]) return false;
      }
    }
    return true;
  }
  
  static copyToClipboard() {
    // TODO: copy to clipboard
  }

  static testFn() {
    console.log('other worked');
  }
}

module.exports = otherShit;