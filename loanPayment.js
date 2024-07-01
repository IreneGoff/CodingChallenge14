// loanPayment.js
export function calculateLoanPayment(principal, rate, time) {
    let monthlyRate = rate / 12;
    let numberOfPayments = time * 12;
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
}
