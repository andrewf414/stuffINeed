"use strict";

class TimeShit {
  // Returns a date that is days in the past, based off the current UTC time.
  static subtractDays(date, days, startOfDay) {
    let timeToSubtract = days * 86400000; // 24 * 60 * 60 * 1000;
    let newDate = new Date(date.valueOf() - timeToSubtract);
    
    if(startOfDay) {
      return new Date(newDate.setHours(0,0,0,0));
    } else {
      return newDate;
    }
  }

  // Returns a date that is days in the future, based off the current UTC time.
  static addDays(date, days, startOfDay) {
    let timeToAdd = days * 86400000; // 24 * 60 * 60 * 1000;
    let newDate = new Date(date.valueOf() + timeToAdd);
    
    if(startOfDay) {
      return new Date(newDate.setHours(0,0,0,0));
    } else {
      return newDate;
    }
  }

  static testFn() {
    console.log('time worked');
  }

  static utcToLocal(datetime) {
    let d = new Date(datetime);
  }
}

module.exports = TimeShit;