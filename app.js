let principal = $('#principal').val();
let rate = $('#rate').val();
let years = $('#years').val();
$("#calculate").click(function () {
  let principal = $('#principal').val();
  alert(principal);
  principal = $('#balance').val();
  rate = $('#rate').val();
  years = $('#years').val();
  period = 12;
  monthlyInterestRate = (rate / 100) / period;
  numberOfPayments = loanTerms * period;
  compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
  interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
  monthlyPayment = principal * interestQuotient;
});