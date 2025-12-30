import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.slice(0, 8).map((item) => (
                <Link key={item.id || item._id} to={`/product/${item.id || item._id}`}>

          <div className="card bg-base-100 w-72 shadow-sm hover:shadow-xl transition">
            
            <figure>
              <img 
                src={item.image} 
                alt={item.name} 
                className="h-48 w-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=No+Image"; }}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <br/>
                {item.brand}
                <div className="badge badge-secondary">NEW</div>
              </h2>

              <p className="text-lg font-semibold text-green-600">₹{item.price}</p>

              <div className="card-actions justify-end"></div>
            </div>

          </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Products;
