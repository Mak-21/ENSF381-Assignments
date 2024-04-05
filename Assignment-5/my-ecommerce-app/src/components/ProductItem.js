import React, { useState } from 'react';
import '../App.css';

function ProductItem({ product, onAddToCart }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => setShowDetails(true);
  const handleMouseLeave = () => setShowDetails(false);

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {product.name}
      </div>
      {showDetails && <div className="product-details">{product.description}</div>}
      <div>Price: ${product.price}</div>
      <button className="button-add-to-cart" onClick={() => onAddToCart(product)}>
  Add to Cart
</button>
    </div>
  );
}

export default ProductItem;
