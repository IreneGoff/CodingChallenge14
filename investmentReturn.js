// investmentReturn.js
export function calculateInvestmentReturn(principal, rate, time, compounds) {
    return principal * Math.pow((1 + rate / compounds), (compounds * time));
}
