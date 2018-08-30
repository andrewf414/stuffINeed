"use strict";

class ApiShit {
  // Convert JSON to URL encoding, pass the JSON obj as the element
  static JSON_to_URLEncoded(element, key, list) {
    var list = list || [];
    if (typeof (element) == 'object') {
      for (var idx in element)
        JSON_to_URLEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
    } else {
      list.push(key + '=' + encodeURIComponent(element));
    }
    return list.join('&');
  }

  static testFn() {
    console.log('api worked');
  }
}

module.exports = ApiShit;