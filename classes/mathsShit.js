"use strict";

class MathsShit {

  // returns sum of an array
  static sum(arr) {
    let sum = 0;
    let n=arr.length;
    for (let i=0; i<n; i++) {
      sum+=arr[i];
    }
    return sum;
  }

  // returns average of an array
  static avg(arr) {
    return this.sum(arr)/arr.length;
  }

  //#region TRIGONOMETRY
  static degsToRads(degrees) {
    return (degrees * Math.PI) / 180.0;
  }
  static radsToDegs(radians) {
    return Math.round((radians * 180.0) / Math.PI);
  }
  //#endregion

  //#region RANDOM
  static rand() {
    return Math.random();
  }
  static randIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //#endregion

  static even(n) {
    if (n%2 == 0) return true;
    return false;
  }

  static odd(n) {
    return !this.even(n);
  }

  // returns true for a prime, false otherwise
  // TODO: probably need to have a dependency of big-integer.js or something
  static prime(n) {
    if (n > Number.MAX_SAFE_INTEGER) return 'Number too large';
    if (n <= 2) return true;
    let root = Math.floor(Math.sqrt(n));
    if (this.even(n)) return false;
    for (let i=3; i<=root; i+=2) {
      if (n%i == 0) return false;
    }
    return true;
  }

  // Test function
  static testFn() {
    console.log('maths worked');
  }
}

module.exports = MathsShit;