import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, onUpdateCartQty, onRemoveFromCart }) {
    const calculateTotal = items =>
        items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                />
            ))}
            
            <div className="total">
                Total (in Cart): ${calculateTotal(cartItems).toFixed(2)}
            </div>
        </div>
    );
}

export default Cart;
