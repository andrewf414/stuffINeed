
"use strict";

class FinancialShit {

  static pmt(pv, r, n) {
    return r*pv/(1-Math.pow((1+r),-n));
  }
  
  static interestOnly(pv, r) {
    return (pv * r);
  }
   
  static paidOverYears(y, pv, r, n, pay = null) {
    let P = 0;
    let i = 0;
    let outstanding = pv;
    let payment = pay === null ? this.pmt(pv, r, n) : pay;
    for (let j=0, x = y*26; j<x; j++) {
      let interest = this.interestOnly(pv, r);
      i += interest;
      P =  P + payment - interest;
      pv = pv - payment + interest;
      // if (P >= outstanding) return `Paid fully in ${j/26} years`
    }
    return {
      principalPaid:P, 
      interestPaid:i,
      outstanding: outstanding-P,
    }
  }

  static stampDuty(state, value) {
    switch(state.toLowerCase()) {
      case 'tas':
        const rates = [
          {low: 0, high: 3000, base: 50, rate: 0, per: 100},
          {low: 30000, high: 25000, base: 50, rate: 1.75, per: 100},
          {low: 25000, high: 75000, base: 435, rate: 2.25, per: 100},
          {low: 75000, high: 200000, base: 1560, rate: 3.5, per: 100},
          {low: 200000, high: 375000, base: 5935, rate: 4, per: 100},
          {low: 375000, high: 750000, base: 12935, rate: 4.25, per: 100},
          {low: 750000, high: Infinity, base: 27810, rate: 4.5, per: 100}
        ]
        let duty = 0;
        for(let i=0, n=rates.length; i<n; i++) {
          if(value >= rates[i].low && value < rates[i].high) {
            duty = rates[i].base + Math.ceil((value-rates[i].low)/rates[i].per) * rates[i].rate;
            break;
          }
        }
        return duty;
      default:
        return 'Not added yet';
    }
  }

  static profit(mortgage, salePrice, commissionRate, fees) {
    return salePrice - (salePrice * commissionRate) - mortgage - fees
  }

  // Test function
  static testFn() {
    console.log('Financial worked');
  }
}

module.exports = FinancialShit;