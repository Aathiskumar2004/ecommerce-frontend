import React from "react";
import products from "../data/data";
import { Link } from "react-router-dom";

const BestDeals = () => {
  return (
    <div className="px-5 py-10">
      <h2 className="text-3xl font-bold text-center mb-4">Best Deals Today</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.slice(0, 4).map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>

          <div key={item.id} className="card bg-base-100 w-72 shadow-md hover:shadow-xl transition">

            <figure className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <span className="badge badge-error absolute top-2 right-2 text-white">
                DEAL
              </span>
            </figure>

            <div className="card-body">
              <h3 className="text-xl font-semibold">{item.name}</h3>

              <p className="text-lg font-bold text-green-600">₹{item.price}</p>

              <button className="btn btn-sm bg-secondary text-white w-full mt-4">
                Great Deal
              </button>
            </div>

          </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default BestDeals;
