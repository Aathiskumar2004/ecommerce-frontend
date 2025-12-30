import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id || product._id}`} className="block h-full">
      <div className="product-card">
        <div className="card-image-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image" 
            onError={(e) => { e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22300%22%20height%3D%22300%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100%22%20y%3D%22150%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"; }}
          />
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
