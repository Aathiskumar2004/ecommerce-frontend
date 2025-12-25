import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id || product._id}`} className="block h-full">
      <div className="product-card">
        <div className="card-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          {/* Optional: Add badge if product has discount or is new */}
          <span className="badge-overlay">HOT</span>
        </div>

        <div className="card-content">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-brand">{product.brand || "Premium Brand"}</p>

          <div className="card-footer">
            <span className="product-price">₹{product.price}</span>
            <button className="add-btn">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
