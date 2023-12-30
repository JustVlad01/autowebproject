// Check if user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('userEmail') && localStorage.getItem('userPassword');
}

// Function to update the cart display
function updateCartDisplay() {
    const orderSummary = document.querySelector('.order-summary');
    let summaryContent = '<h5>Items in Cart:</h5>';
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach((item, index) => {
        summaryContent += `
            <div>
                <p>${item.name}: $${item.price} 
                    <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">Remove</button>
                </p>
            </div>`;
    });

    let cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    summaryContent += `<strong>Total Cost: $${cartTotal.toFixed(2)}</strong>`;
    orderSummary.innerHTML = summaryContent;
}

// Initial display of cart details
document.addEventListener('DOMContentLoaded', updateCartDisplay);

// Function to remove an item from the cart
function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartDisplay();
}

// Form submission for card details validation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!isUserLoggedIn()) {
        // Redirect to login page if user is not logged in
        window.location.href = 'login.html';
        return;
    }

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (isValidCardNumber(cardNumber) && isValidExpiryDate(expiryDate) && isValidCvv(cvv)) {
        processOrder();
    } else {
        alert('Please enter a valid 16-digit card number, expiry date in the format MM/YY, and 3-digit CVV.');
    }
});

function processOrder() {
    console.log('Processing order...');
    alert('Order placed successfully. Your cart is now empty.');

    // Clear the cart
    localStorage.setItem('cartItems', JSON.stringify([]));
    
    // Redirect to order confirmation page
    window.location.href = 'orderplaced.html';
}

function isValidCardNumber(number) {
    return number.length === 16;
}

function isValidExpiryDate(date) {
    return /^\d{2}\/\d{2}$/.test(date);
}

function isValidCvv(cvv) {
    return cvv.length === 3;
}

