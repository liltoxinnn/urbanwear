document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const cart = JSON.parse(localStorage.getItem('cartt')) || [];
    
    
    function displayCartItems() {
        cartItemsContainer.innerHTML = '';
        
        if (cartt.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            subtotalElement.textContent = '0 DZD';
            totalElement.textContent = '0 DZD';
            return;
        }
        
        let subtotal = 0;
        
        cartt.forEach(item => {
            const priceNumber = parseInt(item.price.replace(/\D/g, ''));
            const itemTotal = priceNumber * (item.quantity || 1);
            subtotal += itemTotal;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity || 1}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="btn remove-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        subtotalElement.textContent = `${subtotal.toLocaleString()} DZD`;
        totalElement.textContent = `${subtotal.toLocaleString()} DZD`;
        updateCartCount();
    }
    
    
    function removeItem(productId) {
        const index = cartt.findIndex(item => item.id === productId);
        if (index !== -1) {
            cartt.splice(index, 1);
            localStorage.setItem('cartt', JSON.stringify(cartt));
            displayCartItems();
        }
    }
    
    
    function updateQuantity(productId, change) {
        const item = cartt.find(item => item.id === productId);
        if (item) {
            item.quantity = (item.quantity || 1) + change;
            
            if (item.quantity < 1) {
                removeItem(productId);
            } else {
                localStorage.setItem('cartt', JSON.stringify(cartt));
                displayCartItems();
            }
        }
    }
    
    
    cartItemsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn') || e.target.closest('.remove-btn')) {
            const productId = parseInt(e.target.dataset.id || e.target.closest('.remove-btn').dataset.id);
            removeItem(productId);
        }
        
        if (e.target.classList.contains('minus')) {
            const productId = parseInt(e.target.dataset.id);
            updateQuantity(productId, -1);
        }
        
        if (e.target.classList.contains('plus')) {
            const productId = parseInt(e.target.dataset.id);
            updateQuantity(productId, 1);
        }
    });
    
    
    displayCartItems();
});


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cartt')) || [];
    const cartCounts = document.querySelectorAll('.cart-count');
    
    cartCounts.forEach(count => {
        count.textContent = cartt.reduce((total, item) => total + (item.quantity || 1), 0);
    });
}