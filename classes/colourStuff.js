"use strict";

class ColourStuff {

  // returns {val: [r/h, g/s, b/l, a], model: rgb/hsl}
  static parseColour(colour) {
    let regHexAbbr = /^#([a-f0-9]{3})$/i; // match beginning of string, #, 3 of a-f either case or a number, end of string
    let regHex = /^#([a-f0-9]{6})$/i; // same as above but 6
    let regRgba = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/;
    let regRgbaPer = /^rgba?\(\s*([\d.]+)%\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*(?:,\s*([\d.]+)\s*)?\)$/;
    let regHsla = /^hsla?\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;

    let i, match;

    let val = [0, 0, 0, 1];
    let model = 'rgb';

    if ((match = colour.match(regHexAbbr))) {
      match = match[1];
      for (i = 0; i < 3; i++) {
        val[i] = parseInt(match[i] + match[i], 16);
      }
    } else if ((match = colour.match(regHex))) {
      match = match[1];
      for (i = 0; i < 3; i++) {
        var i2 = i * 2;
        val[i] = parseInt(match.slice(i2, i2 + 2), 16);
      }
    } else if ((match = colour.match(regRgba))) {
      for (i = 0; i < 3; i++) {
        val[i] = parseInt(match[i + 1], 0);
      }
      if (match[4]) val[3] = parseFloat(match[4]);
    } else if ((match = colour.match(regRgbaPer))) {
      for (i = 0; i < 3; i++) {
        val[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      if (match[4]) val[3] = parseFloat(match[4]);
    } else if ((match = colour.match(regHsla))) {
      model = 'hsl';
      val = [
        ((parseFloat(match[1]) % 360) + 360) % 360,
        parseFloat(match[2]) < 0 ? 0 : parseFloat(match[2] > 100 ? 100 : parseFloat(match[2])),
        parseFloat(match[3]) < 0 ? 0 : parseFloat(match[3] > 100 ? 100 : parseFloat(match[3])),
        parseFloat(match[4]) < 0 ? 0 : parseFloat(match[4] > 1 ? 1 : parseFloat(match[4]))
      ];
    }

    return {
      val: val,
      model: model
    };
  }

  // return {h, s, l}
  static rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: h, s: s, l: l };
  }

  // returns {r, g, b}
  static hslToRgb(h, s, l) {
    var r, g, b;
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      var hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
  }

  static componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  // returns #rrggbb
  static rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  // returns {r, g, b}
  static hexToRgb(hex) {
    if (hex[0] === '#') hex = hex.slice(1);
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return { r: r, g: g, b: b };
  }

  // returns in the same format as input (rgb or hex)
  static lighter(colour, amt) {
    let parsed = this.parseColour(colour);
    let rgb, hsl;
    if (parsed.model === 'hsl') {
      hsl = { h: parsed.val[0], s: parsed.val[1], l: parsed.val[2] };
    } else {
      hsl = this.rgbToHsl(parsed.val[0], parsed.val[1], parsed.val[2]);
    }
    hsl.l = hsl.l + amt;
    if (hsl.l > 1) hsl.l = 1;
    rgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
    return `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }
  static darker(colour, amt) {
    let parsed = this.parseColour(colour);
    let rgb, hsl;
    if (parsed.model === 'hsl') {
      hsl = { h: parsed.val[0], s: parsed.val[1], l: parsed.val[2] };
    } else {
      hsl = this.rgbToHsl(parsed.val[0], parsed.val[1], parsed.val[2]);
    }
    hsl.l = hsl.l - amt;
    if (hsl.l < 0) hsl.l = 0;
    rgb = this.hslToRgb(hsl.h, hsl.s, hsl.l);
    return `(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }
}

module.exports = ColourStuff;