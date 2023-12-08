let productList = document.getElementById('productList');
        let addProductForm = document.getElementById('addProductForm');

        // Retrieve stored products from local storage
        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Load products into the product list
        loadProducts();

        function addProduct() {
            let productName = document.getElementById('productName').value;
            let productPrice = parseFloat(document.getElementById('productPrice').value);
            let productQuantity = parseFloat(document.getElementById('productQuantity').value);
            let productUrl = (document.getElementById('productImage').value);

            if (!productName || isNaN(productPrice) || isNaN(productQuantity) || !productUrl) {
                alert('Please enter valid product details.');
                return;
            }

            let productItem = document.createElement('li');
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
            let listItem = button.parentNode;
            productList.removeChild(listItem);

            // Find and remove the product from the products array and update local storage
            let productName = listItem.getElementsByTagName('span')[0].innerText.split(' - ')[0];
            products = products.filter(product => product.productName !== productName);
            localStorage.setItem('products', JSON.stringify(products));
        }

        function editProduct(button) {
            let listItem = button.parentNode;
            let productName = listItem.getElementsByTagName('span')[0].innerText;
            let productPrice = listItem.getElementsByTagName('span')[1].innerText.substring(1);
            let productQuantity = listItem.getElementsByTagName('span')[2].innerText;
            let productUrl = listItem.getElementsByTagName('img')[0].src;

            // Prompt user to edit product details
            let newProductName = prompt('Enter the new product name:', productName);
            let newProductPrice = prompt('Enter the new product price:', productPrice);
            let newProductQuantity = prompt('Enter the new product quantity:', productQuantity);
            let newProductUrl = prompt('Enter the new product image URL:', productUrl);

            if (newProductName && newProductPrice && newProductQuantity && newProductUrl) {
                // Update product details in the list
                listItem.getElementsByTagName('span')[0].innerText = newProductName;
                listItem.getElementsByTagName('span')[1].innerText = 'R' + newProductPrice.toFixed(2);
                listItem.getElementsByTagName('span')[2].innerText = newProductQuantity;
                listItem.getElementsByTagName('img')[0].src = newProductUrl;

                // Update products array and local storage
                for (let i = 0; i < products.length; i++) {
                    if (products[i].productName === productName) {
                        products[i].productName = newProductName;
                        products[i].productPrice = parseFloat(newProductPrice);
                        products[i].productQuantity = parseFloat(newProductQuantity);
                        products[i].productUrl = newProductUrl;
                        break;
                    }
                }
                localStorage.setItem('products', JSON.stringify(products));
            }
        }

        function loadProducts() {
            // Clear the product list
            productList.innerHTML = '';

            // Load each product into the product list
            for (let i = 0; i < products.length; i++) {
                let productItem = document.createElement('li');
                productItem.className = 'product';
                productItem.innerHTML = `
                    <span>${products[i].productName}</span>
                    <span>R${products[i].productPrice.toFixed(2)}</span> 
                    <span>${products[i].productQuantity.toFixed(0)}</span> 
                    <span><img src="${products[i].productUrl}" width:"50" height:"50"></span>
                    <button class="delete-btn" onclick="deleteProduct(this)">Delete</button>
                    <button class="edit-btn" onclick="editProduct(this)">Edit</button>
                `;
                productList.appendChild(productItem);
            }
        }