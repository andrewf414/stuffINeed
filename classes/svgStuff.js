"use strict";

class svgStuff {
  /**
   * returns cartesian plane points for position on a circle {x, y}
   * @param {number} centerX position in SVG
   * @param {number} centerY position in SVG
   * @param {number} radius radius pixels
   * @param {number} angleInDegrees 0-360
   */
  static polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  /**
   * Returns the path for an arc <path>[M, A].
   * Example use is:
   * let path = document.createElementNS('http://www.w3.org/2000/svg','path');
   * path.setAttributeNS(null, 'd', describeWedge(centre, centre, radius, angle1, angle2));
   * settings.svg.appendChild(path);
   * @param {number} x centre point of circle
   * @param {number} y centre point of circle
   * @param {number} radius radius pixels
   * @param {number} startAngle start arc on circle
   * @param {number} endAngle end arc on circle
   */
  static describeArc(x, y, radius, startAngle, endAngle) {
    var start = this.polarToCartesian(x, y, radius, endAngle);
    var end = this.polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');
    return d;
  }

  /**
   * Returns the path for a wedge <path>[M, L, A, L].
   * Same as describeArc except includes lines to centre of circle
   * Example use is:
   * let path = document.createElementNS('http://www.w3.org/2000/svg','path');
   * path.setAttributeNS(null, 'd', describeWedge(centre, centre, radius, angle1, angle2));
   * settings.svg.appendChild(path);
   * @param {number} x centre point of circle
   * @param {number} y centre point of circle
   * @param {number} radius radius pixels
   * @param {number} startAngle start arc on circle
   * @param {number} endAngle end arc on circle
   */
  static describeWedge(x, y, radius, startAngle, endAngle) {
    var start = this.polarToCartesian(x, y, radius, endAngle);
    var end = this.polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
      'M', x, y,
      'L', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      'L', x, y,
    ].join(' ');
    return d;
  }
}

module.exports = svgStuff;