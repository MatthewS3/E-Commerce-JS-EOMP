const productCard = document.getElementById('product-card');

        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';

            const img = document.createElement('img');
            img.src = product.image;
            card.appendChild(img);

            const h2 = document.createElement('h2');
            h2.textContent = product.name;
            card.appendChild(h2);

            const p = document.createElement('p');
            p.textContent = product.description;
            card.appendChild(p);

            const price = document.createElement('p');
            price.className = 'price';
            price.textContent = product.price;
            card.appendChild(price);

            const addToCart = document.createElement('button');
            addToCart.className = 'button';
            addToCart.textContent = 'Add to Cart';
            card.appendChild(addToCart);

            const buyNow = document.createElement('button');
            buyNow.className = 'button';
            buyNow.textContent = 'Buy Now';
            card.appendChild(buyNow);

            return card;
        }

        const products = [
            {
                name: 'Xbox Series X Halo Infinite Edition 1Tb',
                description: 'This is a short description of product 1.',
                price: 'R12,999.99 ',
                image: 'https://i.postimg.cc/QdvJhYKZ/Xbox-Series-X-1-TB-Halo-Infinite-Limited-Edition.jpg' 
            },
            {
                name: 'Xbox Elite Wireless Controller Series 2',
                description: 'This is a short description of product 2.',
                price: 'R3999,99',
                image: 'https://i.postimg.cc/YqnxyCp9/xbox-series-x-controller.jpg'
            },
            {
                name: 'Xbox Series X 1Tb 16Gb RAM',
                description: 'This is a short description of product 3.',
                price: 'R10499,99',
                image: 'https://i.postimg.cc/cJYMH7fg/xboxseriesx-frontortho-dkbg-16x9-crop-rgb.webp'
            },
            {
                name: 'Xbox One Wireless Controller',
                description: 'This is a short description of product 3.',
                price: 'R749,99',
                image: 'https://i.postimg.cc/QdFqLZtq/Microsoft-Xbox-Series-X-Console.jpg'
            },
            {
                name: 'Nintendo Switch OLED, Mario Red Edition',
                description: 'This is a short description of product 3.',
                price: 'R8499,99',
                image: 'https://i.postimg.cc/GhfzMmQQ/662490-Product-0-I-638291229013202058.webp'
            },
            {
                name: 'PlayStation 5 Digital Edition 1Tb',
                description: 'This is a short description of product 3.',
                price: 'R12999,99',
                image: 'https://i.postimg.cc/prbqBWtT/PS5-Console-1200x1200.webp'
            },
            {
                name: 'Samsung Galaxy Z-Fold 4 512Gb',
                description: 'This is a short description of product 3.',
                price: 'R27999,99',
                image: 'https://i.postimg.cc/02vVMyfX/galaxy-Z-Fold-4.webp'
            },
            {
                name: 'Samsung Galaxy A80 128Gb OLED',
                description: 'This is a short description of product 3.',
                price: 'R4999,99',
                image: 'https://i.postimg.cc/wMXFfC6k/A80-samsung.webp'
            },
            {
                name: 'PS5 Pro Controller (DualSense Edge) ',
                description: 'This is a short description of product 3.',
                price: 'R3999.99',
                image: 'https://i.postimg.cc/kMKjgbxt/5d000cc20a084f7d8c45349448c02d5d-l.jpg'
            },
            {
                name: 'Playstation 5 Dualsense Controller',
                description: 'This is a short description of product 3.',
                price: 'R999,99',
                image: 'https://i.postimg.cc/bJ2mbGWW/HPNG2-AV1.jpg'
            },
            {
                name: 'PlayStation 5 Disc Edition 1Tb',
                description: 'This is a short description of product 3.',
                price: 'R13499,99',
                image: 'https://i.postimg.cc/Qxq0pZY8/f61138da5e0a3af7c7c83b6166f1cb03dbfee30f.webp'
            },
            {
                name: 'Huawei MateStation X (12th Gen)',
                description: 'This is a short description of product 3.',
                price: 'R25999,99',
                image: 'https://i.postimg.cc/m2PcBYxQ/matestation-x-series-1.jpg'
            },
            {
                name: 'Skytech Prism II Gaming PC Desktop',
                description: 'AMD Ryzen 9 3900X 3.8GHz, RTX 3090 24GB, 32GB 3600mhz RGB Memory, 1TB Gen4 SSD.',
                price: 'R34999,99',
                image: 'https://i.postimg.cc/1RCgkWdm/91-LSF1i-ZUFL.jpg'
            },
            {
                name: 'ASUS ZenBook Pro Duo UX58',
                description: 'Intel Core i7 2.30 GHz processor, With 16 GB of memory, NVIDIA GeForce RTX 3050 Ti 4 GB ',
                price: 'R39999,99',
                image: 'https://i.postimg.cc/SNSkL87w/asus-zenbook-pro-duo-678-678x452.jpg'
            },
            {
                name: 'Apple MacBook M2 Pro 16 1Tb SSD',
                description: 'Apple M2 Pro With 12-core CPU, 19-core GPU, 16-core Neural Engine 16GB Unified Memory 1TB SSD.',
                price: 'R39999,99',
                image: 'https://i.postimg.cc/rFfcfmfz/csm-teaser-87a40a99d2.jpg'
            },
            {
                name: ' NVIDIA® GeForce RTX™ 4090',
                description: '4th Generation Tensor Cores: Up to 2X AI performance , 3rd Generation RT Cores: Up to 2X ray tracing performance.',
                price: 'R34999,99',
                image: 'https://i.postimg.cc/WznjLbjW/msi-geforce-rtx-4090-gaming-x-trio-24gb-1500px-v1-0001.jpg'
            },
            {
                name: 'T-Dagger ROADMASTER 8000DPI Gaming Mouse ',
                description: 'This is a short description of product 3.',
                price: 'R500,00',
                image: 'https://i.postimg.cc/tCDyB5Xh/gaming-mouse.webp'
            },
            {
                name: 'SteelSeries Apex 3 TKL Gaming Keyboard',
                description: 'This is a short description of product 3.',
                price: 'R1500,00',
                image: 'https://i.postimg.cc/sgXzqhXb/gaming-mech-keyboard.webp'
            },
            {
                name: 'Gigabyte FI32U 32 in 4K Ultra HD Monitor',
                description: 'This is a short description of product 3.',
                price: 'R21999,99',
                image: 'https://i.postimg.cc/K8Hb283j/4k-gaming-moniter.webp'
            },
            {
                name: 'Sony Wireless Noise Cancelling WH-1000XM4',
                description: 'This is a short description of product 3.',
                price: 'R4999,99',
                image: 'https://i.postimg.cc/zXq8wM1z/sony-headset.webp'
            },
        ];

        products.forEach(product => {
            productCard.appendChild(createProductCard(product));
        });

        