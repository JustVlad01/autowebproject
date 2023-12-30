const productPrices = {
    'oil1': 20, // price for the first oil product
    'oil2': 30, // price for the second oil product
    'oil3': 30, // price for the third oil product
    'oil4': 30, // price for the fourth oil product
    'break1': 90, // price for the first brake product
    'break2': 120, // price for the second brake product#
    'break3': 70, // price for the third brake product
    'break4': 50, // price for the fourth brake product
    'suspension1': 110, // price for the first suspension product
    'suspension2': 70, // price for the second suspension product
    'suspension3': 60, // price for the third suspension product
    'suspension4': 50, // price for the fourth suspension product
    
  };

  // Retrieve or initialize cart items
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Function to add an item to the cart
  function addToCart(productId) {
    const productName = document.querySelector(`img[src$='${productId}.jpg']`).nextElementSibling.textContent;
    const productPrice = productPrices[productId];
    cartItems.push({ name: productName, price: productPrice });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${productName} added to cart`);
  }

  // Function to add prices to the products and attach event listeners to buy buttons
  function initializePage() {
    document.querySelectorAll('.col-md-3').forEach((product) => {
      let productId = product.querySelector('img').src.split('/').pop().split('.')[0];
      let price = productPrices[productId];
      if (price) {
        let priceElement = document.createElement('p');
        priceElement.innerText = `Price: €${price}`;
        product.appendChild(priceElement);
      }
      product.querySelector('.btn-primary').addEventListener('click', () => addToCart(productId));
    });
  }

  // Call the function when the document is loaded
  document.addEventListener('DOMContentLoaded', initializePage);





