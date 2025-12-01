import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

const HighLander = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHighlander = async () => {
      const alreadyLoaded = localStorage.getItem("highlander_loaded");

      // ⭐ SECOND TIME — NO LOADING
      if (alreadyLoaded) {
        setLoading(false);
      }

      // ⭐ Always fetch fresh data (but no loading second time)
      try {
        const res = await api.get("/api/products");
        const filtered = res.data.filter(item => item.brand === "Highlander");

        setProducts(filtered);

        // ⭐ Mark as loaded for next time
        localStorage.setItem("highlander_loaded", "true");

      } catch (err) {
        console.log("Error fetching:", err);
      } finally {
        // ⭐ First time → loading OFF after fetch
        if (!alreadyLoaded) {
          setLoading(false);
        }
      }
    };

    fetchHighlander();
  }, []);

  // ⭐ FIRST TIME ONLY LOADING UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-3 grid grid-cols-1 md:grid-cols-4 gap-6">
      {products.map((item) => (
        <Link key={item._id} to={`/product/${item._id}`}>
          <div className="card bg-base-100 shadow-sm cursor-pointer">
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-gray-600">{item.brand}</p>
              <p className="text-gray-800 font-semibold">₹{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HighLander;
