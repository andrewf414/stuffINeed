
"use strict";

class FinancialStuff {

  // Mortgage stuff
  /**
  * Calculate interest and principal payment for loan
  * @param pv - presesnt value
  * @param r - rate as decimal, i.e. .03 is 3%
  * @param n - payments per year (i.e. 12 is month, 26 fortnightly etc)
  * @param y - years of the loan
  */
  static pmt(pv, r, n, y) {
    r = r / n;
    n = n * y;
    return r * pv / (1 - Math.pow((1 + r), -n));
  }

  /**
   * Calculate the interest of a value for a period
   * @param {*} pv Present value
   * @param {*} r Rate as decimal e.g. 0.05 for 5%
   * @param {*} n Periods in a year
   */
  static interestOnly(pv, r, n) {
    return (pv * r/n);
  }

  /**
   * Calculate how much principal and interest will be paid with regular payments and how much will remain outstanding from principal
   * @param {*} periodY Years of the calculation
   * @param {*} y Years of the loan
   * @param {*} pv Present value (i.e. loan size)
   * @param {*} r Rate as a decimal
   * @param {*} n Payments per year (e.g. 12, 26, etc)
   * @param {*} pay Amount to pay per n. The maximum of this and the required payment will be used
   */
  static paidOverYears(periodY, y, pv, r, n, pay) {
    let P = 0;
    let i = 0;
    let outstanding = pv;
    let payment = Math.max(pay, this.pmt(pv, r, n, y));
    for (let j = 0, x = periodY * n; j < x; j++) {
      let interest = this.interestOnly(pv, r, n);
      i += interest;
      P += (payment - interest);
      pv = pv - payment + interest;
      // if (P >= outstanding) return `Paid fully in ${j/26} years`
    }
    return {
      principalPaid: P,
      interestPaid: i,
      outstanding: outstanding - P,
      paymentsOf: payment,
    }
  }

  /**
   * Calculates stampy duty payable on property purchase
   * @param {*} state TAS only currently available
   * @param {*} value Purchase price or market value if gifted etc
   */
  static stampDuty(state, value) {
    switch (state.toLowerCase()) {
      case 'tas':
        const rates = [
          { low: 0, high: 3000, base: 50, rate: 0, per: 100 },
          { low: 30000, high: 25000, base: 50, rate: 1.75, per: 100 },
          { low: 25000, high: 75000, base: 435, rate: 2.25, per: 100 },
          { low: 75000, high: 200000, base: 1560, rate: 3.5, per: 100 },
          { low: 200000, high: 375000, base: 5935, rate: 4, per: 100 },
          { low: 375000, high: 750000, base: 12935, rate: 4.25, per: 100 },
          { low: 750000, high: Infinity, base: 27810, rate: 4.5, per: 100 }
        ]
        let duty = 0;
        for (let i = 0, n = rates.length; i < n; i++) {
          if (value >= rates[i].low && value < rates[i].high) {
            duty = rates[i].base + Math.ceil((value - rates[i].low) / rates[i].per) * rates[i].rate;
            break;
          }
        }
        return duty;
      default:
        return 'Not added yet';
    }
  }

  /**
   * Calculate profit to make on sale of property
   * @param {*} mortgage Outstanding mortgage
   * @param {*} salePrice Amount sold for
   * @param {*} commissionRate Decimal rate paid to agent
   * @param {*} fees Additional fees such as soliciitor, discharge of mortgage etc
   */
  static profit(mortgage, salePrice, commissionRate, fees) {
    return salePrice - (salePrice * commissionRate) - mortgage - fees
  }

  /**
   * Returns total (principal and interest) when compounded over period
   * @param {*} principal Principal amount at start
   * @param {*} rate Rate as a decimal
   * @param {*} npa Payments per year (e.g. 12 for monthly)
   * @param {*} years Years invested
   */
  static compoundInterest(principal, rate, npa, years) {
    return (principal * ((1 + rate / npa) ** (npa * years)));
  }
}

module.exports = FinancialStuff;