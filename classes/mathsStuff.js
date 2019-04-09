"use strict";

class MathsStuff {

  /**
   * Returns sum of an array
   * @param {*} arr array of number
   */
  static sum(arr) {
    let sum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      sum += arr[i];
    }
    return sum;
  }

  /**
   * Returns average of an array
   * @param {*} arr Array of numbers
   */
  static avg(arr) {
    return this.sum(arr)/arr.length;
  }


  //#############################################
  
  
  /**
   * Converts degrees (0-360) into radians
   * @param {*} degrees 
   */
  static degsToRads(degrees) {
    return (degrees * Math.PI) / 180.0;
  }

  /**
   * Converts radians into degrees
   * @param {*} radians 
   */
  static radsToDegs(radians) {
    return Math.round((radians * 180.0) / Math.PI);
  }
  

  //#############################################

  
  /**
   * Returns a random number
   */
  static rand() {
    return Math.random();
  }

  /**
   * Returns a random number within a range [min, max)
   * @param {*} min included
   * @param {*} max excluded
   */
  static randIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  

  //#############################################


  /**
   * Returns true if number is even, else false
   * @param {*} n 
   */
  static even(n) {
    if (n%2 == 0) return true;
    return false;
  }

  /**
   * Returns true if number is odd, else false
   * @param {*} n 
   */
  static odd(n) {
    return !this.even(n);
  }

  // TODO: probably need to have a dependency of big-integer.js or something
  /**
   * returns true for a prime, false otherwise
   * @param {number} num
   */
  static prime(num) {
    if (num * 0 !== 0) return false;  // for undefined, NaN etc
    if (num > Number.MAX_SAFE_INTEGER) return 'Number too large';
    if (num <= 3) return num > 1;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (var i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false
      }
    }

    return true;
  }
}

module.exports = MathsStuff;