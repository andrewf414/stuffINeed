"use strict";

class SortStuff {
  static bubbleSort(arr, asc=true) {
    const n = arr.length;
    if (asc) {
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1])
          {
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] < arr[j + 1])
          {
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
        }
      }
    }
    
    return arr;
  }

  static mergeSort(arr) {
    const n = arr.length;
    if (n ==1) return arr;

    const m = Math.floor(n/2);
    const l = this.mergeSort(arr.slice(0,m));
    const r = this.mergeSort(arr.slice(m));
    return this.merge(l, r);
  }
  static merge(l, r) {
    let combined = [];
    console.log(l)
    console.log(r)
  }

  static insertionSort(arr, asc=true) {
    const n = arr.length;
    if (asc) {
      for (let i=1; i<n; i++) {
        const valToSort = arr[i];
        let j = i-1;
        while (j>=0 && arr[j] > valToSort) {
          arr[j+1] = arr[j];
          j--;
        }
        arr[j+1] = valToSort;
      }
    } else {
      for (let i=1; i<n; i++) {
        const valToSort = arr[i];
        let j = i-1;
        while (j>=0 && arr[j] < valToSort) {
          arr[j+1] = arr[j];
          j--;
        }
        arr[j+1] = valToSort;
      }
    }
    return arr;
  }

  static quickSort(arr) {

  }

  static heapSort(arr) {

  }


  /**
   * Sorts an array of values or objects
   * @param {[<any>]} arr Array to be sorted
   * @param {*} key Key (if sorting an object) to sort by
   * @param {*} asc true is default, false to sort descending
   */
  static sort(arr, key, asc = true) {
    if (asc) {
      return arr.sort((a, b) => {
        if ((a[key] || a) > (b[key] || b)) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      return arr.sort((a, b) => {
        if ((a[key] || a) > (b[key] || b)) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    
  }
}

module.exports = SortStuff;