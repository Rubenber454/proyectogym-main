let cart = [];
    
function addToCart(plan, price) {
    cart.push({ plan, price });
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.plan} - ${item.price} €`;
        
        cartItems.appendChild(li);
        const removeBtn = document.createElement('button');
        removeBtn.setAttribute('id', index)
        removeBtn.textContent = 'Eliminar';
        removeBtn.classList.add('remove-btn')
        removeBtn.addEventListener('click',removeFromCart)
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });

    cartTotal.textContent = `Total: ${total} €`;
}

function removeFromCart(event){
    const index = event.target.getAttribute('id')
    
        cart.splice(index, 1);
        renderCart();
    
}