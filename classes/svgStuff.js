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

  /**
   * Returns an SVG path for an arrowhead shape on a circle
   * @param {number} x circle centre
   * @param {number} y circle centre
   * @param {number} radius radius of circle arrow being drawn on
   * @param {number} arrowAngle how pointy the arrow wiill be
   * @param {number} tipAngle angle on circle the tip of the arrow will be
   * @param {boolean} direction true to point away from circle, false point towards centre
   * @param {number} arrowSize how high the arrow is (in pixels)
   */
  createArrow(x, y, radius, arrowAngle, tipAngle, direction, arrowSize) {
    let radiusFactor = direction ? 1+arrowSize : 1-arrowSize;
    var tip = this.polarToCartesian(x, y, radius, tipAngle);
    
    var line1 = this.polarToCartesian(x, y, radiusFactor*radius, tipAngle-arrowAngle);
    var line2 = this.polarToCartesian(x, y, radiusFactor*radius, tipAngle+arrowAngle);
    
    var d = [
    'M', line1.x, line1.y,
    'L', tip.x, tip.y, 
    'L', line2.x, line2.y
    ].join(' ');
    return d;       
  }

  /**
   * 
   * @param {number} cx centre x
   * @param {number} cy centre y
   * @param {number} r radius
   * @param {HTMLElement} container container to attach circle to
   */
  createCircle(cx, cy, r, container) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttributeNS(null, 'cx', cx);
    circle.setAttributeNS(null, 'cy', cy);
    circle.setAttributeNS(null, 'r', r);
    circle.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
    container.appendChild(circle);
  }
}

module.exports = svgStuff;