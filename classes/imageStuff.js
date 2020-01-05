
"use strict";
const Jimp = require('jimp');

class ImageStuff {

  constructor() {
  }

  generateIcons(path) {
    Jimp.read(path)
      .then(img => {
        [72,76,96,120,128,144,152,180,192,384,512,1024].forEach(w => {
          let clone = img.clone();
          clone.resize(w,w)
          .write(`${path}/icons/icon-${w}x${w}.png`)
        })
      })
      .catch(err => {
        console.error(err);
      });
  }

}

module.exports = ImageStuff;