"use strict";

class TimeShit {
  // Returns a date that is days in the past, based off UTC time.
  static subtractDays(date, days, startOfDay) {
    let timeToSubtract = days * 86400000; // 24 * 60 * 60 * 1000;
    let newDate = new Date(date.valueOf() - timeToSubtract);
    
    if(startOfDay) {
      return new Date(newDate.setHours(0,0,0,0));
    } else {
      return newDate;
    }
  }

  // Returns a date that is days in the future, based off UTC time.
  static addDays(date, days, startOfDay) {
    let timeToAdd = days * 86400000; // 24 * 60 * 60 * 1000;
    let newDate = new Date(date.valueOf() + timeToAdd);
    
    if(startOfDay) {
      return new Date(newDate.setHours(0,0,0,0));
    } else {
      return newDate;
    }
  }

  // Calculate time between two dates
  static secondsBetween(startDate, endDate) {
    return (endDate.valueOf() - startDate.valueOf()) / 1000;
  }
  static minutesBetween(startDate, endDate) {
    return this.secondsBetween / 60;
  }
  static daysBetween(startDate, endDate) {
    return this.minutesBetween(startDate, endDate) / 1440;
  }
  static weeksBetween(startDate, endDate) {
    return this.daysBetween(startDate, endDate) / 7;
  }
  static yearsBetween(startDate, endDate) {
    return this.daysBetween(startDate, endDate) / 365.25;
  }
  static timeBetween(startDate, endDate) {
    let timeElapsed = {
      seconds: this.secondsBetween(startDate, endDate),
      minutes: 0,
      hours: 0,
      days: 0,
      weeks: 0,
      years: 0
    }
    
    if (timeElapsed.seconds < 60) {
      return timeElapsed;
    }
    timeElapsed.minutes = Math.floor(timeElapsed.seconds/60);
    timeElapsed.seconds = timeElapsed.seconds % 60;

    if (timeElapsed.minutes < 60) {
      return timeElapsed;
    }
    timeElapsed.hours = Math.floor(timeElapsed.minutes/60);
    timeElapsed.minutes = timeElapsed.minutes % 60;

    if (timeElapsed.hours < 24) {
      return timeElapsed;
    }
    timeElapsed.days = Math.floor(timeElapsed.hours/24);
    timeElapsed.hours = timeElapsed.hours % 24;

    if (timeElapsed.days < 7) {
      return timeElapsed;
    }
    timeElapsed.weeks = Math.floor(timeElapsed.days/7);
    timeElapsed.days = timeElapsed.days % 7;

    if (timeElapsed.weeks < 52) {
      return timeElapsed;
    }
    timeElapsed.years = Math.floor(timeElapsed.weeks/52);
    timeElapsed.weeks = timeElapsed.weeks % 52;

    return timeElapsed;
  }

  static testFn() {
    console.log('time worked');
  }

  static utcToLocal(datetime) {
    let d = new Date(datetime);
  }
}

module.exports = TimeShit;