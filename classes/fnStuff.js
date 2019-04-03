"use strict";

class FunctionStuff {
  static onceOnly(fn, context) { 
    var result;
    return function() { 
      if(fn) {
        result = fn.apply(context || this, arguments);
        fn = null;
      }
      return result;
    };
  }

  static testFn() {
    console.log('fn worked');
  }
}

module.exports = FunctionStuff;