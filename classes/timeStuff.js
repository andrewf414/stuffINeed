"use strict";

class TimeStuff {

  //#region Add / subtract time

  /**
   * Returns a date that is days in the past, based off UTC time.
   * @param {Date} date Start Date
   * @param {number} days Number of days to subtract
   * @param {boolean} startOfDay true (default) set time to midnight, false to maintain time of date
   */
  static subtractDays(date, days, startOfDay = true) {
    const timeToSubtract = days * 86400000; // 24 * 60 * 60 * 1000;
    const newDate = new Date(date.valueOf() - timeToSubtract);
    
    if(startOfDay) {
      return new Date(newDate.setHours(0,0,0,0));
    } else {
      return newDate;
    }
  }

  /**
   * Returns a date that is days in the future, based off UTC time.
   * @param {Date} date Start Date
   * @param {number} days Days to add
   * @param {boolean} startOfDay true (default) set time to midnight, false to maintain time of date
   */
  static addDays(date, days, startOfDay = true) {
    const timeToAdd = days * 86400000; // 24 * 60 * 60 * 1000;
    const newDate = new Date(date.valueOf() + timeToAdd);
    
    if(startOfDay) {
      return new Date(newDate.setHours(0,0,0,0));
    } else {
      return newDate;
    }
  }

  /**
   * Subtract hours from a date and return new Date
   * @param {Date} date 
   * @param {number} hours 
   */
  static subtractHours(date, hours) {
    const timeToAdd = -hours * 3600000;
    const newDate = new Date(date.valueOf() + timeToAdd);

    return newDate;
  }

  /**
   * Add hours to a date and return new Date
   * @param {Date} date 
   * @param {number} hours 
   */
  static addHours(date, hours) {
    const timeToAdd = hours * 3600000;
    const newDate = new Date(date.valueOf() + timeToAdd);

    return newDate;
  }

  /**
   * Subtract minutes from a date and return new Date
   * @param {Date} date 
   * @param {number} hours 
   */
  static subtractMinutes(date, minutes) {
    const timeToAdd = -minutes * 60000;
    const newDate = new Date(date.valueOf() + timeToAdd);

    return newDate;
  }

  /**
   * Add minutes to a date and return new Date
   * @param {Date} date 
   * @param {number} hours 
   */
  static addMinutes(date, minutes) {
    const timeToAdd = minutes * 60000;
    const newDate = new Date(date.valueOf() + timeToAdd);

    return newDate;
  }

  //#endregion

  //#region Time between
  
  /**
   * Returns the complete seconds between two dates
   * @param {Date} startDate 
   * @param {Date} endDate 
   */
  static secondsBetween(startDate, endDate) {
    return Math.floor((endDate.valueOf() - startDate.valueOf()) / 1000);
  }

  /**
   * Returns the complete minutes between two dates
   * @param {Date} startDate 
   * @param {Date} endDate 
   */
  static minutesBetween(startDate, endDate) {
    return Math.floor(this.secondsBetween(startDate, endDate) / 60);
  }

  /**
   * Returns the complete days between two dates
   * @param {Date} startDate 
   * @param {Date} endDate 
   */
  static daysBetween(startDate, endDate) {
    return Math.floor(this.minutesBetween(startDate, endDate) / 1440);
  }

  /**
   * Returns the complete weeks between two dates
   * @param {Date} startDate 
   * @param {Date} endDate 
   */
  static weeksBetween(startDate, endDate) {
    return Math.floor(this.daysBetween(startDate, endDate) / 7);
  }

  /**
   * Returns the complete years between two dates
   * @param {Date} startDate 
   * @param {Date} endDate 
   */
  static yearsBetween(startDate, endDate) {
    return Math.floor(this.daysBetween(startDate, endDate) / 365.25);
  }

  /**
   * Returns the seconds between two dates
   * {seconds, minutes, hours, days, weeks, years}
   * @param {Date} startDate 
   * @param {Date} endDate 
   */
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
  

  //#endregion

  //#region Conversions etc

  static utcToLocal(datetime) {
    const offset = new Date().getTimezoneOffset() / 60;
    const newD = this.subtractHours(datetime, offset);
   
    return newD;
  }

  static localToUtc(datetime) {
    const offset = new Date().getTimezoneOffset() / 60;
    const newD = this.addHours(datetime, offset);
   
    return newD;
  }

  /**
   * Returns number of days in the month
   * @param {number} month 1-12
   * @param {number} year 
   */
  static daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  /**
   * Returns the long name of a day
   * @param {number} day index of the week, 0 = Sunday
   */
  static longDay(day) {
    return this.prototype.days[day];
  }

  /**
   * Returns a string in format yyyy-mm-ddThh:mm:ss
   * @param {Date} date 
   */
  static toDateTimeString(date) {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}T${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
  }

  //#endregion

  //#region Daylight Savings

  /**
   * Returns UTC Date of when daylight savings will start (for Australia)
   * @param {number} year year to get date for
   */
  static getDaylightSavingsStart(year) {
    // 2am first Sunday October
    let d = new Date();
    let date = 1;
    d.setFullYear(year);
    d.setMonth(9);
    d.setDate(date);
    while (d.getDay() !== 0) {
      d.setDate(++date);
    }
    return new Date(year, 9, date, 2, 0);
  }

  /**
   * Returns UTC Date of when daylight savings will end (for Australia)
   * @param {number} year year to get date for
   */
  static getDaylightSavingsEnd(year) {
    // 3am first Sunday April
    let d = new Date();
    let date = 1;
    d.setFullYear(year);
    d.setMonth(3);
    d.setDate(date);
    while (d.getDay() !== 0) {
      d.setDate(++date);
    }
    return new Date(year, 3, date, 3, 0);
  }

  /**
   * Returns a Date in UTC in the local time for given timezone
   * @param {string} timezone Currently only Australia/Hobart
   * @param {Date} datetime 
   */
  static getTimeInTimeZone(timezone, datetime) {
    switch (timezone) {
      case 'Australia/Hobart':
        if (datetime.valueOf() > this.getDaylightSavingsStart(datetime.getFullYear()) || datetime.valueOf() < this.getDaylightSavingsEnd(datetime.getFullYear())) {
          // Daylight savings
          let s = this.addHours(datetime, 11).toISOString();
          return s.replace('T', ' ').replace(/-/g, '').slice(0, -5)
        } else {
          // Standard time
          let s = this.addHours(datetime, 10).toISOString();
          return s.replace('T', ' ').replace(/-/g, '').slice(0, -5)
        }
      default:
    }
  }

  //#endregion



}

TimeStuff.prototype.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
TimeStuff.prototype.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

module.exports = TimeStuff;