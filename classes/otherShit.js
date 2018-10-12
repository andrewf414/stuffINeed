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

  // Check for equality including type, object, array
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
    return a === b;
  }
  
  // Makes and removes a textarea that it places the text in to select and copy it
  static copyToClipboard(text) {
    let content = document.createElement('textarea');
    content.value = text;
    content.setAttribute('id', 'tempForCopy');
    content.setAttribute('readonly', '');
    document.body.appendChild(content);
    let copyTextarea = document.querySelector('tempForCopy');
    copyTextarea.focus();
    copyTextarea.select();
    try {
      let successful = document.execCommand('copy');
    } catch (err) {
      console.log('Oops, unable to copy');
    } finally {
      document.body.removeChild(content);
    }
  }

  static testFn() {
    console.log('other worked');
  }
}

module.exports = otherShit;