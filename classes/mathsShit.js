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

  //#region STATISTICS
  // returns median of an array
  static mean(arr) {
    return this.avg(arr);
  }

  static median(arr) {
    arr.sort();
    let l = arr.length;
    if (l%2 == 0) {
      return (arr[l/2] + arr[(l/2)+1])/2;
    } else {
      return arr[(l-1)/2];
    }
  }

  static mode(arr) {
    let counts = {};
    let mode = 0;
    let modes = [];
    for (let i=0, n=arr.length; i<n; i++) {
      counts[arr[i]] = counts[arr[i]] + 1 || 1;
      if (counts[arr[i]] > mode) mode = counts[arr[i]];
    }

    for (let key in counts) {
      if (counts[key] === mode) modes.push(key);
    }
    return modes;
  }

  static stddev(arr, isPopulation) {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Math.sqrt(
      arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
        (arr.length - (isPopulation ? 0 : 1))
    );
  }
  //#endregion

  //#region TRIGONOMETRY
  static degsToRads(degrees) {
    return (degrees * Math.PI) / 180.0;
  }
  static radsToDegs(radians) {
    return (radians * 180.0) / Math.PI;
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