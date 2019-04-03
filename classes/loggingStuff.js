"use strict";

class LoggingStuff {
  // Log messages to a file as UTC time \t message
  static Logging(msg, path, filename = 'log.txt') {
    fs.appendFileSync(path + filename, `${new Date().toISOString()}\t${msg}\n`);
  }

  static testFn() {
    console.log('logging worked');
  }
}

module.exports = LoggingStuff;