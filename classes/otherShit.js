"use strict";

class otherShit {
  /**
   * Returns a new object that deeply copies in any arrays or objects
   * @param {*} obj The object to be copied
   */
  static copyObject(obj) {
    let newObj = {};
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        newObj[key] = this.copyArray(obj[key]);
      } else if (typeof(obj[key]) === 'object' && obj[key] !== null) {
        newObj[key] = this.copyObject(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
  
  /**
   * Returns a new array that deeply copies in any arrays or objects
   * @param {*} arr 
   */
  static copyArray(arr) {
    let newArr = [];
    for (let i = 0, n = arr.length; i < n; i++) {
      if (Array.isArray(arr[i])) {
        newArr.push(this.copyArray(arr[i]));
      } else if (typeof(arr[i]) === 'object' && arr[i] !== null) {
        newArr.push(this.copyObject(arr[i]));
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  
  /**
   * Makes a deep copy of arrays and objects, however nested
   * @param {*} obj 
   */
  static deepCopy(obj) {
    if (Array.isArray(obj)) {
      return this.copyArray(obj);
    } else if (typeof(obj) === 'object' && obj !== null) {
      return this.copyObject(obj);
    } else {
      return obj;
    }
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