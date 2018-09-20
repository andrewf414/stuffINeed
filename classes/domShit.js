"use strict";

class domShit {

  //#region DOM MANIPULATION
  // insert an element, passing either an element of an id for the parent
  static insertElement(elementType, parent, text = null) {
    const e = document.createElement(elementType);
    if (text !== null) {
      const textNode = document.createTextNode(text);
      e.appendChild(textNode);
    }
    if (typeof (parent) === 'string') {
      const p = document.getElementById(parent);
      p.appendChild(e);
    } else {
      parent.appendChild(e);
    }
    return e;
  }
  //#endregion


  static testFn() {
    console.log('dom worked');
  }
}

module.exports = domShit;