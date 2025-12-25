import React from "react";
import products from "../data/data";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const BestDeals = () => {
  return (
    <div className="px-5 py-10">
      <h2 className="text-3xl font-bold text-center mb-4">Best Deals Today</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.slice(0, 4).map((item) => (
          <div key={item.id} className="h-full">
             <ProductCard product={item} />
          </div>
        ))}

      </div>
    </div>
  );
};

export default BestDeals;
