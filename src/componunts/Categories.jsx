import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products");
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
                onError={(e) => { e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22300%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20300%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22300%22%20height%3D%22300%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100%22%20y%3D%22150%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"; }}
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
