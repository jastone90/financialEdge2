import {Injectable} from 'angular2/core';

@Injectable()
export class CalculateService {
    calculate(loan: Loan) {
        var apr = loan.apr / 100;


        var monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var date = new Date();
        date.setDate(1);
        var label = (monthNames[date.getMonth()]) + " " + date.getFullYear();
        var dates=[label];
        var debt = [loan.startingBalance];
        var interest = [];
        var monthlyPayment = loan.monthlyPayment;
        var remainingDebt = debt;

        if(loan.monthlyPayment < parseFloat((loan.startingBalance * apr)/ 12).toFixed(2)) {
            console.log('A higher monthly payment is required to reduce the loan balance');
        }

        while (remainingDebt > 0 ) {
            var accruedInterest = parseFloat(((remainingDebt * apr) / 12).toFixed(2));
            interest.push(accruedInterest);
            remainingDebt = parseFloat(remainingDebt - (monthlyPayment - accruedInterest)).toFixed(2);
            if(remainingDebt < 0) remainingDebt = 0;
            debt.push(remainingDebt);
            date = new Date(date.setMonth(date.getMonth() + 1));
            dates.push((monthNames[date.getMonth()]) + " " + date.getFullYear());
        }
    }
}