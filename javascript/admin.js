const productList = document.getElementById('productList');
        const addProductForm = document.getElementById('addProductForm');

        // Retrieve stored products from local storage
        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Load products into the product list
        loadProducts();

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
                <span>${productName}</span>
                <span>R${productPrice.toFixed(2)}</span> 
                <span>${productQuantity.toFixed(0)}</span> 
                <span><img src="${productUrl}" width:"50" height:"50"></span>
                <button class="delete-btn" onclick="deleteProduct(this)">Delete</button>
            `;

            productList.appendChild(productItem);

            // Clear form fields
            addProductForm.reset();

            // Add new product to products array and update local storage
            products.push({ productName, productPrice, productQuantity, productUrl });
            localStorage.setItem('products', JSON.stringify(products));
        }

        function deleteProduct(button) {
            const listItem = button.parentNode;
            productList.removeChild(listItem);

            // Find and remove the product from the products array and update local storage
            const productName = listItem.getElementsByTagName('span')[0].innerText.split(' - ')[0];
            products = products.filter(product => product.productName !== productName);
            localStorage.setItem('products', JSON.stringify(products));
        }

        

        function loadProducts() {
            // Clear the product list
            productList.innerHTML = '';

            // Add each product to the product list
            products.forEach(product => {
                const productItem = document.createElement('li');
                productItem.className = 'product';
                productItem.innerHTML = `
                <span>${product.productName}</span>
                <span>R${product.productPrice.toFixed(2)}</span> 
                <span>${product.productQuantity.toFixed(0)}</span> 
                <span><img src="${product.productUrl}" width:"50" height:"50"></span>
                <button class="delete-btn" onclick="deleteProduct(this)">Delete</button>
                <button class="edit-btn" onclick="editProduct(this)">Edit</button>
                `;
                productList.appendChild(productItem);
            });
        }