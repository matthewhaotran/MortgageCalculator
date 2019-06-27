$("#calculate").click(function () {
  let principal = $('#principal').val();
  let rate = ($('#rate').val()) / 1200;
  let months = $('#months').val();
  var monthlyPayment = principal * (rate * Math.pow((1 + rate), months))/(Math.pow((1 + rate), months) - 1);
  $('#monthlyPaymentMessage').text("You're monthly payment is $" + monthlyPayment.toFixed(2));
});