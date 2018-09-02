"use strict";

class NodeShit {
  
  // base64 encode
  static base64Encode(str) {
    return Buffer.from(str, 'utf8').toString('base64');
  }

  static testFn() {
    console.log('Node worked');
  }
}

module.exports = NodeShit;