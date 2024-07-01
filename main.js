//U35549532


// main.js
import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

window.calculateInterest = function() {
    let principal = parseFloat(document.getElementById('principal-interest').value);
    let rate = parseFloat(document.getElementById('rate-interest').value);
    let time = parseFloat(document.getElementById('time-interest').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }

    let interest = calculateInterest(principal, rate, time);
    document.getElementById('interest-result').innerText = `Interest: ${interest}`;
};

window.calculateLoanPayment = function() {
    let principal = parseFloat(document.getElementById('principal-loan').value);
    let rate = parseFloat(document.getElementById('rate-loan').value);
    let time = parseFloat(document.getElementById('time-loan').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }

    let loanPayment = calculateLoanPayment(principal, rate, time);
    document.getElementById('loan-result').innerText = `Monthly Payment: ${loanPayment.toFixed(2)}`;
};

window.calculateInvestmentReturn = function() {
    let principal = parseFloat(document.getElementById('principal-investment').value);
    let rate = parseFloat(document.getElementById('rate-investment').value);
    let time = parseFloat(document.getElementById('time-investment').value);
    let compounds = parseFloat(document.getElementById('compounds-investment').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compounds)) {
        alert('Please enter valid numbers');
        return;
    }

    let investmentReturn = calculateInvestmentReturn(principal, rate, time, compounds);
    document.getElementById('investment-result').innerText = `Future Value: ${investmentReturn.toFixed(2)}`;
};
