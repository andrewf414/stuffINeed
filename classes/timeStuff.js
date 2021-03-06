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

    if (startOfDay) {
      return new Date(newDate.setHours(0, 0, 0, 0));
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

    if (startOfDay) {
      return new Date(newDate.setHours(0, 0, 0, 0));
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
   * Returns the time in given unit between two dates
   * {seconds, minutes, hours, days, weeks, years}
   * @param {Date} startDate
   * @param {Date} endDate
   * @param {string} unit Unit to return value in (obj, y, w, d, h, m, s)
   */
  static timeBetween(startDate, endDate, unit) {
    if (
      Object.prototype.toString.call(startDate) !== "[object Date]" ||
      Object.prototype.toString.call(endDate) !== "[object Date]"
    )
      return null;

    let retVal;
    // Get time difference in each unit
    const seconds = this.secondsBetween(startDate, endDate);
    const minutes = seconds / 60;
    const hours = seconds / 3600;
    const days = seconds / 86400;
    const weeks = seconds / 604800;
    const years = seconds / 31557600; // 365.25 days

    let monthDiff = endDate.getMonth() - startDate.getMonth();
    let yearDiff = endDate.getFullYear() - startDate.getFullYear();
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
    if (dayDiff < 0) {
        monthDiff--;
    }

    switch (unit) {
      case "obj":
        retVal = {
          years: Math.floor(years),
          weeks: Math.floor((seconds % 31557600) / 604800),
          days: Math.floor(days % 7),
          hours: Math.floor(hours % 24),
          minutes: Math.floor(minutes % 60),
          seconds: seconds % 60,
        };
        break;
      case "years":
        retVal = years;
        break;
      case "ymd":
        retVal = {
          years: yearDiff,
          months: monthDiff,
          days: dayDiff < 0 ? this.daysInMonth(endDate.getMonth(), endDate.getFullYear()) + dayDiff : dayDiff
        };
        break;
      case "months":
        retVal = yearDiff * 12 + monthDiff;
        break;
      case "weeks":
        retVal = weeks;
        break;
      case "days":
        retVal = days;
        break;
      case "hours":
        retVal = hours;
        break;
      case "minutes":
        retVal = minutes;
        break;
      case "seconds":
        retVal = seconds;
        break;
      default:
        retVal = {
          seconds: seconds % 60,
          minutes: Math.floor(minutes % 60),
          hours: Math.floor(hours % 24),
          days: Math.floor(days % 7),
          weeks: Math.floor(weeks % 52),
          years: Math.floor(years),
        };
    }
    return retVal;
  }

  /**
   * Takes two 24hr strings and calculates the time between them in minutes
   * @param {string} start 24 hours time, must be 4 digits
   * @param {string} end 24 hours time, must be 4 digits
   */
  static calculateTime(start, end) {
    start = start.replace(":", "");
    end = end.replace(":", "");
    let sh = parseInt(start.substr(0, 2));
    let sm = parseInt(start.substr(2, 2));
    let eh = parseInt(end.substr(0, 2));
    let em = parseInt(end.substr(2, 2));
    if (sh > eh) {
      // gone over midnight
      let diff =
        em >= sm
          ? (eh + 24 - sh) * 60 + (em - sm)
          : (eh + 24 - sh - 1) * 60 + (sm - em);
      return diff;
    } else {
      // same day
      let diff =
        em >= sm ? (eh - sh) * 60 + (em - sm) : (eh - sh - 1) * 60 + (sm - em);
      return diff;
    }
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
    return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}T${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;
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
   * Returns a Date given in UTC in the local time for given timezone in the format yyyymmdd hh:mm:ss
   * @param {string} timezone Currently only Australia/Hobart
   * @param {Date} datetime
   */
  static getTimeInTimeZone(timezone, datetime) {
    switch (timezone) {
      case "Australia/Hobart":
        if (
          datetime.valueOf() >
            this.getDaylightSavingsStart(datetime.getFullYear()) ||
          datetime.valueOf() <
            this.getDaylightSavingsEnd(datetime.getFullYear())
        ) {
          // Daylight savings
          let s = this.addHours(datetime, 11).toISOString();
          return s.replace("T", " ").replace(/-/g, "").slice(0, -5);
        } else {
          // Standard time
          let s = this.addHours(datetime, 10).toISOString();
          return s.replace("T", " ").replace(/-/g, "").slice(0, -5);
        }
      default:
    }
  }

  //#endregion

  /**
   * Returns the next business day after a day (assuming Mon-Fri)
   * @param {Date} date defaults to current date
   */
  static getNextBusinessDay(date = new Date()) {
    let tomorrow = date.getDay() + 1;
    if (tomorrow === 6) {
      // Saturday
      date.setDate(date.getDate() + 3);
      return date;
    }
    if (tomorrow === 0) {
      // Sunday
      date.setDate(date.getDate() + 2);
      return date;
    }
    date.setDate(date.getDate() + 1);
    return date;
  }

  static isValidDate(d) {
    if (Object.prototype.toString.call(d) === "[object Date]") {
      // it is a date
      if (isNaN(d.valueOf())) {
        // date is not valid
        return false;
      } else {
        // date is valid
        return true;
      }
    } else {
      // not a date
      return false;
    }
  }
}

TimeStuff.prototype.months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
TimeStuff.prototype.days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

module.exports = TimeStuff;
