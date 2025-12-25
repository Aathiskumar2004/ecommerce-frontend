import React, { useEffect, useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch cart (CORRECT ROUTE)
  const fetchCart = async () => {
    try {
      const res = await api.get("/api/cart/my-cart", {
        withCredentials: true,
      });
      // Safely handle different response structures
      const cartData = Array.isArray(res.data) ? res.data : (res.data.cart || []);
      setCart(cartData);
    } catch (error) {
      console.log("Cart load error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) {
    return <h2 className="text-center p-5">Loading Cart...</h2>;
  }

  if (cart.length === 0) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty 🛒</h2>
        <Link to="/" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    );
  }

  // 🔥 Remove item (ONLY route backend has)
  const removeItem = async (productId, size) => {
    try {
      const res = await api.delete(
        `/api/cart/remove/${productId}/${size}`,
        { withCredentials: true }
      );
      // Safely handle different response structures
      const updatedCart = Array.isArray(res.data) ? res.data : (res.data.cart || []);
      setCart(updatedCart);
    } catch (error) {
      console.log("Remove error:", error);
    }
  };

  // 🔥 Total price
  const total = cart.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          item.productId ? (
            <div
              key={item._id}
              className="flex gap-6 items-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.productId.image}
                alt={item.productId.name}
                className="w-28 h-28 object-cover rounded-md"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold">
                  {item.productId.name}
                </h2>
                <p className="text-gray-500">{item.productId.brand}</p>
                <p className="font-semibold text-indigo-600">
                  ₹{item.productId.price}
                </p>

                <p className="mt-1">
                  Size: <b>{item.size}</b>
                </p>
                <p>
                  Quantity: <b>{item.quantity}</b>
                </p>
              </div>

              <button
                className="btn btn-error btn-sm"
                onClick={() =>
                  removeItem(item.productId._id, item.size)
                }
              >
                Remove
              </button>
            </div>
          ) : null
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-10 text-right">
        <h2 className="text-2xl font-bold mb-3">
          Total: ₹{total}
        </h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
