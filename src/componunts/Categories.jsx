import React from "react";
import products from "../data/data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.slice(0, 8).map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>

          <div key={item.id} className="card bg-base-100 w-72 shadow-sm hover:shadow-xl transition">
            
            <figure>
              <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
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
