"use strict";

class StatsStuff {
  /**
   * Returns the mean of an array of numbers
   * @param {*} arr 
   */
  static mean(arr) {
    let sum = 0;
    let n=arr.length;
    for (let i=0; i<n; i++) {
      sum+=arr[i];
    }
    return sum/arr.length;
  }

  /**
   * Returns the median of an array of numbers
   * @param {*} arr 
   */
  static median(arr) {
    arr.sort();
    let l = arr.length;
    if (l%2 == 0) {
      return (arr[l/2] + arr[(l/2)+1])/2;
    } else {
      return arr[(l-1)/2];
    }
  }

  /**
   * Returns the modes of an array of numbers as an array of 1 or more elements
   * @param {*} arr 
   */
  static mode(arr) {
    let counts = {};
    let mode = 0;
    let modes = [];
    for (let i=0, n=arr.length; i<n; i++) {
      counts[arr[i]] = counts[arr[i]] + 1 || 1;
      if (counts[arr[i]] > mode) mode = counts[arr[i]];
    }

    for (let key in counts) {
      if (counts[key] === mode) modes.push(parseFloat(key));
    }
    return modes;
  }

  /**
   * Returns the standard deviation for a sample of population
   * @param {*} arr Array of numbers
   * @param {*} isPopulation flag. True if for population or false for a sample. Default is false
   */
  static stddev(arr, isPopulation = false) {
    const mean = this.mean(arr);
    const n = arr.length;
    let sum = 0;
    for (let i=0; i<n; i++) {
      sum += (arr[i] - mean) ** 2;
    }
    return Math.sqrt(sum/(+n - (isPopulation ? 0 : 1)));
  }
}

module.exports = StatsStuff;