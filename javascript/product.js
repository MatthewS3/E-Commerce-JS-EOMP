let products = []
const data = [
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
      catagory: "Desktop",
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
      amt: 500.00,
      seller: "PEP STORES",
      catagory: "Mouse",
    },

    {
      id: 11,
      name: "SteelSeries Apex 3 TKL Gaming Keyboard",
      img: "https://i.postimg.cc/sgXzqhXb/gaming-mech-keyboard.webp",
      amt: 1500.00,
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
      amt: 37999,
      seller: "INCREDIBLE CONNECTIONS",
      catagory: "Graphics Card",
    },
  ];
  
  const productsContainer = document.querySelector(".products");
  const categoryList = document.querySelector(".category-list");
  
  function displayProducts(products) {
    if (products.length > 0) {
      const product_details = products
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
      <button class='btn'>Add to Cart</button>
    </div>
  </div>`
        )
        .join("");
  
      productsContainer.innerHTML = product_details;
    } else {
      productsContainer.innerHTML = "<h3>No Products Available</h3>";
    }
  }
  
  function setCategories() {
    const allCategories = data.map((product) => product.catagory);
    //console.log(allCategories);
    const catagories = [
      "All",
      ...allCategories.filter((product, index) => {
        return allCategories.indexOf(product) === index;
      }),
    ];
    //console.log(catagories);
    categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");
  
    categoryList.addEventListener("click", (e) => {
      const selectedCatagory = e.target.textContent;
      selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
    });
  }
  const priceRange = document.querySelector("#priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  function setPrices() {
    const priceList = data.map((product) => product.amt);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceValue.textContent = "R" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "R" + e.target.value;
      displayProducts(data.filter((product) => product.amt <= e.target.value));
    });
  }
  
  const txtSearch = document.querySelector("#txtSearch");
  txtSearch.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value) {
      displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
    } else {
      displayProducts(data);
    }
  });
  
  displayProducts(data);
  setCategories();
  setPrices();   

        