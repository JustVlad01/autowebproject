function calculatePayments() {
  var vehiclePrice = document.getElementById('vehiclePrice').value,
      loanTerm = document.getElementById('loanTerm').value,
      intRate = document.getElementById('intRate').value,
      downPayment = document.getElementById('downPayment').value,
      tradeValue = document.getElementById('tradeValue').value,
      amount = parseInt(vehiclePrice),
      months = parseInt(loanTerm),
      down = parseInt(downPayment),
      trade = parseInt(tradeValue),
      totalDown = down + trade,
      annInterest = parseFloat(intRate),
      monInt = annInterest / 1200;

  if (!amount) {
      alert('Please add a loan amount');
      return;
  }

  if (!months) {
      months = 60;
      document.getElementById('loanTerm').value = '60';
  }

  if (!down) {
      down = 0;
      document.getElementById('downPayment').value = '0';
  }

  if (!trade) {
      trade = 0;
      document.getElementById('tradeValue').value = '0';
  }

  if (!annInterest) {
      annInterest = 3.25;
      document.getElementById('intRate').value = '3.25';
  }

  var calc = ((monInt + (monInt / (Math.pow((1 + monInt), months) - 1))) * (amount - (totalDown || 0))).toFixed(2);

  var paymentResults = document.getElementById('paymentResults');
  paymentResults.style.display = 'block';
  paymentResults.innerHTML = '';
  var results = document.createElement('div');
  results.innerHTML = '<h1 style="text-align:center">Estimated Monthly Payment is:<br/></h1>' + '<h3 style="text-align:center">$' + calc + '/Month</h3>';

  // Insert the results at the top of the paymentResults element
  paymentResults.prepend(results);
}
