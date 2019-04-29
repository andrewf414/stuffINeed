"use strict";

class otherStuff {
  /**
   * Returns a new object that deeply copies in any arrays or objects
   * @param {*} obj The object to be copied
   */
  static copyObject(obj) {
    let newObj = {};
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        newObj[key] = this.copyArray(obj[key]);
      } else if (Object.prototype.toString.call(obj[key]) === '[object Object]' && obj[key] !== null) {
        newObj[key] = this.copyObject(obj[key]);
      } else if (Object.prototype.toString.call(obj[key]) === '[object Date]') {
        newObj[key] = new Date(obj[key]);
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
      } else if (Object.prototype.toString.call(arr[i]) === '[object Object]' && arr[i] !== null) {
        newArr.push(this.copyObject(arr[i]));
      } else if (Object.prototype.toString.call(arr[i]) === '[object Date]') {
        newArr.push(new Date(arr[i]));
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
    } else if (Object.prototype.toString.call(obj) === '[object Object]' && obj !== null) {
      return this.copyObject(obj);
    } else if (Object.prototype.toString.call(obj) === '[object Date]') {
      return new Date(obj);
    } else {
      return obj;
    }
  }

  
  //#############################################

  /**
   * Checks whether two arrays are equal and returns boolean
   * @param {*} a 
   * @param {*} b 
   */
  static arraysEqual(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0, n = a.length; i < n; i++) {
      if (Object.prototype.toString.call(a[i]) !== Object.prototype.toString.call(b[i])) return false;

      if (Array.isArray(a[i]) && Array.isArray(b[i])) {
        if (this.arraysEqual(a[i], b[i])) {
          continue;
        } else {
          return false;
        }
      } else if (Object.prototype.toString.call(a[i]) === '[object Object]' && Object.prototype.toString.call(b[i]) === '[object Object]') {
        if (this.objectsEqual(a[i], b[i])) {
          continue;
        } else {
          return false;
        }
      } else if (Object.prototype.toString.call(a[i]) === '[object Date]' && Object.prototype.toString.call(b[i]) === '[object Date]') {
        if (a[i].valueOf() !== b[i].valueOf()) {
          return false;
        } else {
          continue;
        }
      } else {
        if (a[i] !== b[i]) return false;
        continue;
      }
    }
    return true;
  }

  /**
   * Checks whether two objects are equal and returns booolean
   * @param {*} a Object 1
   * @param {*} b Object 2
   */
  static objectsEqual(a, b) {
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    
    if (aKeys.length !== bKeys.length) return false;
    if (!this.arraysEqual(aKeys.sort(), bKeys.sort())) return false;

    for (let i = 0, n = aKeys.length; i < n; i++) {
      if (Array.isArray(a[aKeys[i]]) && Array.isArray(b[aKeys[i]])) {
        if (this.arraysEqual(a[aKeys[i]], b[aKeys[i]])) {
          continue;
        } else {
          return false;
        }
      } else if (Object.prototype.toString.call(a[aKeys[i]]) === '[object Object]' && Object.prototype.toString.call(b[aKeys[i]]) === '[object Object]') {
        if (this.objectsEqual(a[aKeys[i]], b[aKeys[i]])) {
          continue;
        } else {
          return false;
        }
      } else if (Object.prototype.toString.call(a[aKeys[i]]) === '[object Date]' && Object.prototype.toString.call(b[aKeys[i]]) === '[object Date]') {
        if (a[aKeys[i]].valueOf() !== b[aKeys[i]].valueOf()) {
          return false;
        } else {
          continue;
        }
      } else {
        if (a[aKeys[i]] !== b[aKeys[i]]) {
          return false;
        } else {
          continue;
        }
      }
    }
    return true;
  }



  /**
   * Check for equality between two variables, including nested objects and arrays
   * @param {*} a 
   * @param {*} b 
   */
  static isEqual(a, b) {
    if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) return false;

    if (Array.isArray(a) && Array.isArray(b)) {
      return this.arraysEqual(a, b);
    }

    if (Object.prototype.toString.call(a) === '[object Object]') {
      return this.objectsEqual(a, b);
    }

    return a === b;
  }

  
  //#############################################

  /**
   * Takes an array of objects and returns an array of distinct values of the given key
   * @param {[{}]} arr array of objects
   * @param {*} key key in objects you want array set from
   */
  static objArrayToSet(arr, key) {
    return Array.from(new Set(arr.map(item => item[key])))
  }



  //#############################################
  
  
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
}

module.exports = otherStuff;