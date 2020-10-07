const form = document.querySelector('#loan-form');
const calculateBtn = document.querySelector('.btn');
const amountInput = document.querySelector('#amount');
const yearPercentage = document.querySelector('#rate');
const periodInput = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

form.addEventListener('submit', function(e){
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none'; 
    setTimeout(calculateResults, 1000); 
    e.preventDefault();
});

function calculateResults(e) {
    const amount = parseFloat(amountInput.value);
    const monthlyRate = parseFloat(yearPercentage.value) / 100 / 12;
    const numberOfPayments = parseFloat(periodInput.value) * 12;

    /**Monthly payments */
    const x = Math.pow(1 + monthlyRate, numberOfPayments);
    const monthly = (amount * x * monthlyRate) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * numberOfPayments).toFixed(2);
        totalInterest.value = ((monthly * numberOfPayments) - amount).toFixed(2);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block'; 
    } else {
        showError("There's been an error. Please checkout your numbers");
    }

}

function showError(message) {
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    const alertBox = document.createElement('div');
    alertBox.className = 'alert alert-danger';
    
    alertBox.appendChild(document.createTextNode(message));
    document.getElementById('loading').style.display = 'none';
    
    card.insertBefore(alertBox, heading);
    
    setTimeout(clearError, 2000);
}

function clearError(){
    document.querySelector('.alert').remove();
}