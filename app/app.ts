import {Component, Input} from 'angular2/core';
import {CalculateService} from './calculate.service';

export class Loan {
    id:number;
    name:string;
    startingBalance:number;
    apr:number;
    monthlyPayment:number;
}

@Component({
    selector: 'my-app',
    providers: [CalculateService],
    template: `
        <h1>{{title}}</h1>
        <h2>{{firstLoan.startingBalance}}</h2>
        <div><label>id: </label>{{firstLoan.name}}</div>
        <div>
            <label>Loan Amount: </label>
            <input [(ngModel)]="firstLoan.startingBalance" placeholder="startingBalance">
        </div>
        <div>
            <label>Interest Rate: </label>
            <input [(ngModel)]="firstLoan.apr" placeholder="apr">
        </div>
        <div>
            <label>Monthly Payment: </label>
            <input [(ngModel)]="firstLoan.monthlyPayment" placeholder="monthlyPayment">
        </div>
        <div><button (click)="calculate()">Calculate Loan Repayment</button></div>
        `
})

export class AppComponent {
    title = 'Financial Edge';
    author = 'Alan Stone';

    firstLoan: Loan = {
        id: 1,
        name: 'Mortgage',
        startingBalance: 235000,
        apr: 3.125,
        monthlyPayment: 1021.68
    };

    constructor(private _calculateService: CalculateService) { }

    calculate() {
        this._calculateService.calculate(this.firstLoan);
    }


}




