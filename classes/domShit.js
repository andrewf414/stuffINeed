"use strict";

class domShit {

  //#region DOM MANIPULATION
   /**
   * insert an element, passing either an element or an id for the parent
   * @param elementType - what you want to insert e.g. 'div'
   * @param parent - what to append to (either element itself or id of parent)
   * @param text - the inner text of the appended element
  */
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