// Product data
const products = [
    {
        id: 1,
        title: "Brown Silk Midi Skirt",
        description: "Elegant soft-touch A-line skirt with comfortable elastic waistband. Perfect for both casual and formal occasions.",
        price: "4050 DZD",
        image: "./images/0580F32C-52DB-4CB3-9F41-2432F8397E51-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L"
    },
    {
        id: 2,
        title: "Louboutin heels",
        description: "Louboutin Signature Brown Leather Sandals with the iconic red sole. Elegant design perfect for special occasions.",
        price: "16900 DZD",
        image: "./images/415680E9-E14D-468C-8E8F-49EA92CB5F5A-Picsart-AiImageEnhancer (14).jpg",
        size: "36-40 EU"
    },
    {
        id: 3,
        title: "Ivory Wrap Blouse",
        description: "Ivory wrap shirt with side tie. Made from premium lightweight fabric that drapes beautifully.",
        price: "6900 DZD",
        image: "./images/4392DE45-D1AF-4F26-BB04-CC512C1A0A72-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L"
    },
    {
        id: 4,
        title: "Taupe Wrap Blouse",
        description: "V-neck wrap blouse with tie detail in taupe. Features elegant draping and a flattering silhouette.",
        price: "7900 DZD",
        image: "./images/4B9AD03E-48C9-48F8-A95B-AF5426FB1F51-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L"
    },
    {
        id: 5,
        title: "Brown Heeled Boots",
        description: "Chocolate brown ankle boots with block heel and pointed toe. Perfect for fall and winter outfits.",
        price: "17900 DZD",
        image: "./images/7AB6A0E6-1F47-4A55-A811-D7BC565AD06B-Picsart-AiImageEnhancer.jpg",
        size: "36-41 EU"
    },
    {
        id: 6,
        title: "Brown Asymmetrical Top",
        description: "Asymmetrical brown top with draping and a blazer-style neckline. Modern and versatile piece for your wardrobe.",
        price: "5900 DZD",
        image: "./images/816EE61D-77AB-4C50-B9E4-A9D0F5F2B610-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L"
    },
    {
        id: 7,
        title: "Ivory Slingback Heels",
        description: "Cream-colored square-toe slingback pumps with a low block heel. Comfortable and elegant for everyday wear.",
        price: "9900 DZD",
        image: "./images/8173B99F-0242-434B-A626-3C94DCB0ADC1-Picsart-AiImageEnhancer.jpg",
        size: "36-40 EU"
    },
    {
        id: 8,
        title: "Cream Wide-Leg Pants",
        description: "High-Waisted Cream Wide-Leg Trousers with a flowy silhouette. Perfect for elegant casual or office looks.",
        price: "10900 DZD",
        image: "./Images/DE498709-6FF0-42A8-A027-A4B8898065FE-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L, XL"
    },
    {
        id: 9,
        title: "Chocolate Puff-Sleeve Blouse",
        description: "Puff-Sleeve Fitted Blouse in Cocoa. Romantic and trendy design with beautiful sleeve details.",
        price: "8900 DZD",
        image: "./images/A003D942-C3A9-4545-A4F4-35E597E8E1D3-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L"
    },
    {
        id: 10,
        title: "Brown Structured Vest",
        description: "Classic Tailored Vest in Cocoa Brown. Perfect for layering and creating professional looks.",
        price: "9900 DZD",
        image: "./images/A7059FB4-6F57-4D6A-9AC5-5FFDD01913ED-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L"
    },
    {
        id: 11,
        title: "Cream Structured Baker Boy Cap",
        description: "Cream Baker Boy Hat with Gold Accent. Stylish accessory to elevate any casual outfit.",
        price: "4900 DZD",
        image: "./images/AA63C709-0386-4C13-8580-A7648480BD7C-Picsart-AiImageEnhancer.jpg",
        size: "One Size"
    },
    {
        id: 12,
        title: "Chocolate Brown Crossbody Bag",
        description: "Elegant chocolate brown crossbody bag with gold hardware. Perfect size for daily essentials.",
        price: "5900 DZD",
        image: "./images/ACE9E1C3-0C6E-4970-9809-3E625AF72275-Picsart-AiImageEnhancer.jpg",
        size: "One Size"
    },
    {
        id: 13,
        title: "Jacquemus Ivory Mini Bag",
        description: "Jacquemus Le Bambino Long – Ivory. Trendy mini bag perfect for special occasions.",
        price: "4590 DZD",
        image: "./images/C92B4E9F-1634-4822-9AD1-FCD9B10BCDCE-Picsart-AiImageEnhancer.jpg",
        size: "One Size"
    },
    {
        id: 14,
        title: "ANOUKI Ivory Pleated Midi Dress",
        description: "ANOUKI Pleated Kimono Sleeve Midi Dress in Ivory. Elegant and versatile piece for your wardrobe.",
        price: "11900 DZD",
        image: "./images/D36DA0B8-4A6C-4B38-9614-6051B8FD5C08-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L"
    },
    {
        id: 15,
        title: "Beige Linen Vest",
        description: "Tailored Linen-Blend Waistcoat. Perfect for layering in warmer months.",
        price: "9900 DZD",
        image: "./images/DA7D1810-1122-4E9D-94E1-E8A3EDB4A35A-Picsart-AiImageEnhancer.jpg",
        size: "S, M, L"
    }
];


let cart = JSON.parse(localStorage.getItem('cart')) || [];


function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('detailImage').src = product.image;
    document.getElementById('detailTitle').textContent = product.title;
    document.getElementById('detailDescription').textContent = product.description;
    document.getElementById('detailPrice').textContent = product.price;
    document.getElementById('detailSize').textContent = `Size: ${product.size}`

    document.getElementById('detailSize').textContent = `Size: ${product.size}`;

    
    const oldAddBtn = document.querySelector('.add-to-cart');
    const newAddBtn = oldAddBtn.cloneNode(true);
    oldAddBtn.parentNode.replaceChild(newAddBtn, oldAddBtn);

    newAddBtn.addEventListener('click', function () {
        addToCart(productId); 
    });

    
    const oldBuyBtn = document.querySelector('.buy-now');
    const newBuyBtn = oldBuyBtn.cloneNode(true);
    oldBuyBtn.parentNode.replaceChild(newBuyBtn, oldBuyBtn);

    newBuyBtn.addEventListener('click', function () {
        addToCart(productId); 
        window.location.href = './cart.html';
    });

    document.getElementById('detailsPanel').classList.add('active');
}



function hideProductDetails() {
    document.getElementById('detailsPanel').classList.remove('active');
}


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
  
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    
    if (existingProductIndex >= 0) {
        
        cart[existingProductIndex].quantity += 1;
    } else {
        
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
  showToast(`${product.title} added to cart!`);
  
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    
    showToast(`${product.title} added to cart!`);

}


document.addEventListener('DOMContentLoaded', function() {
    
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-product-id'));
            addToCart(productId);
        });
    });
});
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
