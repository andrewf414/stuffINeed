"use strict";

class domStuff {

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

module.exports = domStuff;