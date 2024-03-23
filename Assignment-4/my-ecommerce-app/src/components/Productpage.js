import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import productsData from '../data/product';
import '../App.css';


function Productpage() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = (product) => {
        const productExists = cartItems.find(item => item.id === product.id);
        if (productExists) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...productExists, quantity: productExists.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleUpdateCartQty = (product, quantity) => {
        if (quantity > 0) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...product, quantity } : item
            ));
        } else {
            handleRemoveFromCart(product.id);
        }
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <div className="product-page">
            <Header />
            <div className="content">
                <div className="product-list-container">
                    <ProductList productsData={productsData} onAddToCart={handleAddToCart} />
                </div>
                <div className="cart-container">
                    <Cart cartItems={cartItems} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Productpage;
