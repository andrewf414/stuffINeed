"use strict";

class domShit {
  //#region SVG
  // returns cartesian plane points for position on a circle
  static polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  // returns the path for an arc
  /* example use is:
    let path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttributeNS(null, 'd', describeWedge(centre, centre, radius, angle1, angle2));
    settings.svg.appendChild(path);
  */
  static describeArc(x, y, radius, startAngle, endAngle){
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
    'M', start.x, start.y, 
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');
    return d;       
  }
  
  // Same as describeArc but also draws lines to the arc from the centre point of circle
  static describeWedge(x, y, radius, startAngle, endAngle){
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
    'M', x, y, 
    'L', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    'L', x, y,
    ].join(' ');
    return d;       
  }
  //#endregion
  
  //#region DOM MANIPULATION
  static insertElement(elementType, parent, text = null) {
    const e = document.createElement(elementType);
    if (text !== null) {
      const textNode = document.createTextNode(text);
      e.appendChild(textNode);
    }
    if (typeof(parent) == 'string') {
      const p = document.getElementById(parent);
      p.appendChild(e);
    } else {
      parent.appendChild(e);
    }
  }
  //#endregion
  
  static testFn() {
    console.log('svg worked');
  }
}

module.exports = domShit;