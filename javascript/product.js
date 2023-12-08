let products = []
let data = [
    {
      id: 1,
      name: "Xbox Series X Halo Infinite Edition 1Tb",
      img: "https://i.postimg.cc/QdvJhYKZ/Xbox-Series-X-1-TB-Halo-Infinite-Limited-Edition.jpg",
      amt: 12999.99,
      seller: "GAME",
      catagory: "Console",
    },
  
    {
      id: 2,
      name: "Xbox Elite Wireless Controller Series 2",
      img: "https://i.postimg.cc/YqnxyCp9/xbox-series-x-controller.jpg",
      amt: 3999.99,
      seller: "MACRO",
      catagory: "Controller",
    },
  
    {
      id: 3,
      name: "Nintendo Switch OLED Mario Red Edition",
      img: "https://i.postimg.cc/GhfzMmQQ/662490-Product-0-I-638291229013202058.webp",
      amt: 8499.99,
      seller: "HI-FI CORP",
      catagory: "Console",
    },

    {
      id: 4,
      name: "PlayStation 5 Pro Controller, DuelSense",
      img: "https://i.postimg.cc/kMKjgbxt/5d000cc20a084f7d8c45349448c02d5d-l.jpg",
      amt: 3999.99,
      seller: "GAME",
      catagory: "Controller",
    },

    {
      id: 5,
      name: "Huawei MateStation X (12th Gen)",
      img: "https://i.postimg.cc/m2PcBYxQ/matestation-x-series-1.jpg",
      amt: 25999.99,
      seller: "HUAWEI STORE",
      catagory: "Moniter",
    },
  
    {
      id: 6,
      name: "Samsung Galaxy Z-Fold 4 512Gb",
      img: "https://i.postimg.cc/02vVMyfX/galaxy-Z-Fold-4.webp",
      amt: 27999.99,
      seller: "PEP STORES",
      catagory: "Phone",
    },
  
    {
      id: 7,
      name: "Xbox Series X 1Tb 4k 16Gb RAM",
      img: "https://i.postimg.cc/cJYMH7fg/xboxseriesx-frontortho-dkbg-16x9-crop-rgb.webp",
      amt: 10499.99,
      seller: "PICK N PAY",
      catagory: "Console",
    },

    {
      id: 8,
      name: "Xbox One Wireless Controller",
      img: "https://i.postimg.cc/QdFqLZtq/Microsoft-Xbox-Series-X-Console.jpg",
      amt: 749.99,
      seller: "MACRO",
      catagory: "Controller",
    },

    {
      id: 9,
      name: "PlayStation 5 Digital Edition 1TB",
      img: "https://i.postimg.cc/prbqBWtT/PS5-Console-1200x1200.webp",
      amt: 12999.99,
      seller: "GAME",
      catagory: "Console",
    }, 

    {
      id: 10,
      name: "T-Dagger ROADMASTER 8000DPI Gaming Mouse",
      img: "https://i.postimg.cc/tCDyB5Xh/gaming-mouse.webp",
      amt: 499.99,
      seller: "PEP STORES",
      catagory: "Mouse",
    },

    {
      id: 11,
      name: "SteelSeries Apex 3 TKL Gaming Keyboard",
      img: "https://i.postimg.cc/sgXzqhXb/gaming-mech-keyboard.webp",
      amt: 1499.99,
      seller: "INCREIBLE CONNECTIONS",
      catagory: "KeyBoard",
    },
  
    {
      id: 12,
      name: "Samsung Galaxy A80 128Gb OLED",
      img: "https://i.postimg.cc/wMXFfC6k/A80-samsung.webp",
      amt: 4499.99,
      seller: "MACRO",
      catagory: "Phone",
    },
  
    {
      id: 13,
      name: "Playstation 5 Dualsense Controller",
      img: "https://i.postimg.cc/bJ2mbGWW/HPNG2-AV1.jpg",
      amt: 999.99,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Controller",
    },

    {
      id: 14,
      name: "Gigabyte FI32U 32 in 4K Ultra HD Monitor",
      img: "https://i.postimg.cc/K8Hb283j/4k-gaming-moniter.webp",
      amt: 19999.99,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Moniter",
    },

    {
      id: 15,
      name: "Sony Wireless Noise Cancelling WH-1000XM4",
      img: "https://i.postimg.cc/zXq8wM1z/sony-headset.webp",
      amt: 4999.99,
      seller: "HI-FI CORP",
      catagory: "Accessories",
    },
  
    {
      id: 16,
      name: "PlayStation 5 Disc Edition 1Tb",
      img: "https://i.postimg.cc/Qxq0pZY8/f61138da5e0a3af7c7c83b6166f1cb03dbfee30f.webp",
      amt: 13499.99,
      seller: "WOOLWORTHS",
      catagory: "Console",
    },
  
    {
      id: 17,
      name: "Skytech Prism II Gaming PC Desktop",
      img: "https://i.postimg.cc/1RCgkWdm/91-LSF1i-ZUFL.jpg",
      amt: 33499.99,
      seller: "MACRO",
      catagory: "Desktop",
    },

    {
      id: 18,
      name: "ASUS ZenBook Pro Duo UX58",
      img: "https://i.postimg.cc/SNSkL87w/asus-zenbook-pro-duo-678-678x452.jpg",
      amt: 34499.99,
      seller: "ASUS STORE",
      catagory: "Laptop",
    },

    {
      id: 19,
      name: "Apple MacBook M2 Pro 16 1Tb SSD",
      img: "https://i.postimg.cc/rFfcfmfz/csm-teaser-87a40a99d2.jpg",
      amt: 39999.99,
      seller: "APPLE STORE",
      catagory: "Laptop",
    },
  
    {
      id: 20,
      name: "NVIDIA® GeForce RTX™ 4090",
      img: "https://i.postimg.cc/WznjLbjW/msi-geforce-rtx-4090-gaming-x-trio-24gb-1500px-v1-0001.jpg",
      amt: 37999.99,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Graphics Card",
    },

// <<<<<============================= NEW PRODUCTS =============================>>>>>

    {
      id: 21,
      name: "Skullcandy Mod True Wireless Buds",
      img: "https://i.postimg.cc/jjjYL2HJ/shopping-1.webp",
      amt: 1199.99,
      seller: "GAME",
      catagory: "Accessories",
    },
  
    {
      id: 22,
      name: "JBL Flip Essenial 2 Portable Speaker",
      img: "https://i.postimg.cc/qMQMtYtt/shopping-2.webp",
      amt: 1999.99,
      seller: "MACRO",
      catagory: "Accessories",
    },
  
    {
      id: 23,
      name: "Samsung Galaxy Z Flip5 256GB",
      img: "https://i.postimg.cc/rsDsMNJn/shopping-3.webp",
      amt: 19999.99,
      seller: "HI-FI CORP",
      catagory: "Phone",
    },

    {
      id: 24,
      name: "SAMSUNG 43inch Odyssey Neo G7 4K",
      img: "https://i.postimg.cc/9ffs086B/shopping-4.webp",
      amt: 8499.99,
      seller: "GAME",
      catagory: "Moniter",
    },

    {
      id: 25,
      name: "Intel Core i5 + GeForce RTX 4060 Gaming PC",
      img: "https://i.postimg.cc/sfpBwwLm/shopping-5.webp",
      amt: 22999.99,
      seller: "MACRO",
      catagory: "Desktop",
    },
  
    {
      id: 26,
      name: "Gigabyte Nvidia GeForce RTX 3080 GV",
      img: "https://i.postimg.cc/kg139P2c/shopping-6.webp",
      amt: 8499.99,
      seller: "GAME",
      catagory: "Graphics Card",
    },
  
    {
      id: 27,
      name: "Xbox One X 1Tb 4k Capable",
      img: "https://i.postimg.cc/BbrkY2nP/shopping-7.webp",
      amt: 4399.99,
      seller: "PICK N PAY",
      catagory: "Console",
    },

    {
      id: 28,
      name: "Air Jordan 1 Mid Men's Shoes - Purple",
      img: "https://i.postimg.cc/W17vYfLG/shopping-9.webp",
      amt: 2499.99,
      seller: "MACRO",
      catagory: "Shoes",
    },

    {
      id: 29,
      name: "Playstation 4 Pro 1Tb Black",
      img: "https://i.postimg.cc/PJp0QSTk/shopping-8.webp",
      amt: 4799.99,
      seller: "GAME",
      catagory: "Console",
    }, 

    {
      id: 30,
      name: "Logitech G Pro X Superlight Wireless - Black",
      img: "https://i.postimg.cc/ydmD8CDD/shopping-20.webp",
      amt: 1699.99,
      seller: "PEP STORES",
      catagory: "Mouse",
    },

    {
      id: 31,
      name: "Olive Tree - K3 RGB Wired Mechanical Gaming Keyboard",
      img: "https://i.postimg.cc/L5n9cdFY/shopping-30.webp",
      amt: 599.99,
      seller: "INCREIBLE CONNECTIONS",
      catagory: "KeyBoard",
    },
  
    {
      id: 32,
      name: "Apple iPhone 15 Pro Max 512GB",
      img: "https://i.postimg.cc/QN0jjdf2/shopping-27.webp",
      amt: 31499.99,
      seller: "MACRO",
      catagory: "Phone",
    },
  
    {
      id: 33,
      name: "Nike Air More Uptempo Black White",
      img: "https://i.postimg.cc/G3Bb3QGR/shopping-11.webp",
      amt: 3999.99,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Shoes",
    },

    {
      id: 34,
      name: "Samsung LF24T350 24inch LED IPS Monitor",
      img: "https://i.postimg.cc/FRYV1RjT/shopping-26.webp",
      amt: 1499.99,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Moniter",
    },

    {
      id: 35,
      name: "Rolex Oyster Perpetual Date Watch",
      img: "https://i.postimg.cc/8zMtDj1D/shopping-19.webp",
      amt: 109999.99,
      seller: "HI-FI CORP",
      catagory: "Accessories",
    },
  
    {
      id: 36,
      name: " Xbox 360 Black Slim",
      img: "https://i.postimg.cc/Pr3Qj1GB/shopping-22.webp",
      amt: 999.99,
      seller: "WOOLWORTHS",
      catagory: "Console",
    },

    {
      id: 38,
      name: "Razer Blade 14inch QHD 165Hz Laptop, AMD Ryzen 9",
      img: "https://i.postimg.cc/PrmtwQyw/shopping-15.webp",
      amt: 32499.99,
      seller: "ASUS STORE",
      catagory: "Laptop",
    },

    {
      id: 39,
      name: "Lenovo Legion Pro 7 Gaming Laptop, 16inch",
      img: "https://i.postimg.cc/90kqwtYS/shopping-17.webp",
      amt: 66999.99,
      seller: "APPLE STORE",
      catagory: "Laptop",
    },
  
    {
      id: 40,
      name: "Asus GeForce RTX 2080 Super Dual OC Evo V2",
      img: "https://i.postimg.cc/YCfhM3gR/shopping-14.webp",
      amt: 499.99,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Graphics Card",
    },
  
    {
      id: 42,
      name: "Nike Air Force 1 Red Rose Custom Low",
      img: "https://i.postimg.cc/nc4WkjBg/shopping-12.webp",
      amt: 2999.99,
      seller: "MACRO",
      catagory: "Shoes",
    },

    {
      id: 44,
      name: "Xbox 360 Wireless Controller | Black",
      img: "https://i.postimg.cc/LsNHC4gB/shopping-25.webp",
      amt: 299.99,
      seller: "GAME",
      catagory: "Controller",
    },

    {
      id: 45,
      name: "Viprtech Avalanche Gaming PC (Ryzen 5 16Gb Ddr4)",
      img: "https://i.postimg.cc/kM6ymfFK/shopping-32.webp",
      amt: 9999.99,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Desktop",
    },
  
    {
      id: 46,
      name: "Samsung Galaxy S23 Ultra 512GB",
      img: "https://i.postimg.cc/zGpQgygN/shopping-29.webp",
      amt: 21999.99,
      seller: "PEP STORES",
      catagory: "Phone",
    },

    {
      id: 48,
      name: "Sony PS3 DualShock 3 Black Wireless",
      img: "https://i.postimg.cc/MTLzwsDn/shopping-24.webp",
      amt: 299.99,
      seller: "MACRO",
      catagory: "Controller",
    },

    {
      id: 50,
      name: "LOGITECH - MX ANYWHERE 3 WIRELESS MOUSE",
      img: "https://i.postimg.cc/3r9wSBmQ/shopping-21.webp",
      amt: 1199.99,
      seller: "PEP STORES",
      catagory: "Mouse",
    },

    {
      id: 51,
      name: "DarkAlien K710 Mechanical Gaming Keyboard",
      img: "https://i.postimg.cc/HxSWvYR1/shopping-31.webp",
      amt: 999.99,
      seller: "INCREIBLE CONNECTIONS",
      catagory: "KeyBoard",
    },

    {
      id: 55,
      name: "Frost NYC Mens Watch - Skeleton Sport Gold",
      img: "https://i.postimg.cc/J46WJYJt/shopping-18.webp",
      amt: 199999.99,
      seller: "HI-FI CORP",
      catagory: "Accessories",
    },
  
    {
      id: 56,
      name: "Sony PlayStation 3 80GB Black ",
      img: "https://i.postimg.cc/X77kmQPf/shopping-23.webp",
      amt: 999.99,
      seller: "WOOLWORTHS",
      catagory: "Console",
    },
  
    {
      id: 57,
      name: "PCBUILDER 5500 GTX1650 16GB 1TB W11H - Bundle",
      img: "https://i.postimg.cc/d1zr3cmd/shopping-33.webp",
      amt: 11499.99,
      seller: "GAME",
      catagory: "Desktop",
    },

    {
      id: 58,
      name: "ROG Zephyrus Duo 16 Ryzen 9 32GB 1TB SSD",
      img: "https://i.postimg.cc/vHRYTNry/shopping-16.webp",
      amt: 64999.99,
      seller: "ASUS STORE",
      catagory: "Laptop",
    },

    {
      id: 59,
      name: "Nike - Air Mag Back To The Future sneakers ",
      img: "https://i.postimg.cc/VLn1nkKH/shopping-10.webp",
      amt: 704999.99,
      seller: "APPLE STORE",
      catagory: "Shoes",
    },
  
    {
      id: 60,
      name: "Arktek Nvidia GT750Ti 2GB GDDR5 128-bit",
      img: "https://i.postimg.cc/QMfGq9Gh/shopping-13.webp",
      amt: 2599.99,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Graphics Card",
    },
  ];
  
  let productsContainer = document.querySelector(".products");
  let categoryList = document.querySelector(".category-list");
  
  function displayProducts(products) {
    if (products.length > 0) {
      let product_details = products
        .map(
          (product) => `
    <div class="product">
    <div class="img">
      <img src="${product.img}" alt="${product.name}" />
    </div>
    <div class="product-details">
      <span class="name">${product.name}</span>
      <span class="amt">R${product.amt}</span>
      <span class="seller">${product.seller}</span>
      <button class='btn' onclick="addToCart(${product.id})">Add to Cart</button>

    </div>
  </div>`
        )
        .join("");
  
      productsContainer.innerHTML = product_details;
    } else {
      productsContainer.innerHTML = "<h3>No Products Available</h3>";
    }
  }

  function addToCart(id) {
    let product = data.find((item) => item.id === id);
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}
  
  function setCategories() {
    let allCategories = data.map((product) => product.catagory);
    //console.log(allCategories);
    let catagories = [
      "All",
      ...allCategories.filter((product, index) => {
        return allCategories.indexOf(product) === index;
      }),
    ];
    //console.log(catagories);
    categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");
  
    categoryList.addEventListener("click", (e) => {
      let selectedCatagory = e.target.textContent;
      selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
    });
  }
  let priceRange = document.querySelector("#priceRange");
  let priceValue = document.querySelector(".priceValue");
  
  function setPrices() {
    let priceList = data.map((product) => product.amt);
    let minPrice = Math.min(...priceList);
    let maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceValue.textContent = "R" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "R" + e.target.value;
      displayProducts(data.filter((product) => product.amt <= e.target.value));
    });
  }
  
  let txtSearch = document.querySelector("#txtSearch");
  txtSearch.addEventListener("keyup", (e) => {
    let value = e.target.value.toLowerCase().trim();
    if (value) {
      displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
    } else {
      displayProducts(data);
    }
  });
  
  displayProducts(data);
  setCategories();
  setPrices();   

        