const productList = document.getElementById('productList');
const addProductForm = document.getElementById('addProductForm');

function addProduct() {
 const productName = document.getElementById('productName').value;
 const productPrice = parseFloat(document.getElementById('productPrice').value);
 const productQuantity = parseFloat(document.getElementById('productQuantity').value);
 const productUrl = (document.getElementById('productImage').value);

 if (!productName || isNaN(productPrice) || isNaN(productQuantity) || !productUrl) {
    alert('Please enter valid product details.');
    return;
 }

 const productItem = document.createElement('li');
 productItem.className = 'product';
 productItem.innerHTML = `
 <span>${productName} - $${productPrice.toFixed(2)} - $${productQuantity.toFixed(4)} - <img src="${productUrl}" width:"50" height:"50"></span>
 <button class="delete-btn" onclick="deleteProduct(this)">Delete</button>
 `;

 productList.appendChild(productItem);

 // Clear form fields
 addProductForm.reset();
}

function deleteProduct(button) {
 const listItem = button.parentNode;
 productList.removeChild(listItem);
}