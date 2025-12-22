import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import BestDeals from "../componunts/BestDeal";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 👉 Fetch single product from backend
  const fetchProduct = async () => {
    try {
      const res = await api.get("/api/products");
      const found = res.data.find((item) => item._id === id);

      setProduct(found);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <h2 className="text-center p-5">Loading...</h2>;
  if (!product) return <h2 className="text-center p-5">Product Not Found</h2>;

  // ✅ Add to Cart (backend)
 const handleAddToCart = async () => {
  if (!size) {
    alert("⚠️ Please select a size first");
    return;
  }

  try {
    const res = await api.post("/api/cart/add", {
      productId: product._id,
      size,
      quantity: qty
    });

    alert("Added to cart!");
  } catch (error) {
    console.log(error);

    if (error.response?.status === 403) {
      alert("Please login first");
      navigate("/login");
    } else {
      alert("Failed to add to cart");
    }
  }
};

  // 🛒 Buy Now
  const handleBuyNow = async () => {
    if (!size) {
      alert("⚠️ Please select a size before buying");
      return;
    }

    try {
      await api.post(
        "/api/cart/add",
        {
          productId: product._id,
          quantity: qty,
        },
        { withCredentials: true }
      );

      navigate("/checkout");
    } catch (error) {
      console.log("Buy now error:", error);
    }
  };

  return (
    <>
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-2">{product.brand}</p>
          <p className="text-2xl font-semibold mb-4 text-indigo-600">
            ₹{product.price}
          </p>

          <p className="mb-6 text-gray-500">
            This is a premium quality product. Stylish and comfortable for daily use.
          </p>

          {/* SIZE SELECTION */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Size</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`btn btn-sm ${
                    size === s ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-6">
            <button
              className="btn btn-sm"
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            >
              -
            </button>

            <span className="text-lg font-bold">{qty}</span>

            <button className="btn btn-sm" onClick={() => setQty(qty + 1)}>
              +
            </button>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button className="btn btn-outline" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <BestDeals />
    </>
  );
};

export default ProductDetails;
