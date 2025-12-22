import React, { useEffect, useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch user's cart from backend
  const fetchCart = async () => {
    try {
      const res = await api.get("/api/cart");
      setCart(res.data.cart);
      setLoading(false);
    } catch (error) {
      console.log("Cart load error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <h2 className="text-center p-5">Loading Cart...</h2>;

  if (cart.length === 0)
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty 🛒</h2>
        <Link to="/" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    );

  // 🔥 Update quantity
  const updateQty = async (itemId, newQty) => {
    if (newQty < 1) return;

    try {
      await api.put(`/api/cart/update/${itemId}`, {
        quantity: newQty,
      });

      setCart(
        cart.map((item) =>
          item._id === itemId ? { ...item, quantity: newQty } : item
        )
      );
    } catch (error) {
      console.log("Quantity update error:", error);
    }
  };

  // 🔥 Remove item
  const removeItem = async (itemId) => {
    try {
      await api.delete(`/api/cart/delete/${itemId}`);

      setCart(cart.filter((item) => item._id !== itemId));
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  // 🔥 Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item._id}
            className="card card-side bg-base-100 shadow-md p-4 flex items-center gap-6"
          >
            <img
              src={item.product.image}
              className="w-32 h-32 object-cover rounded-lg"
              alt={item.product.name}
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.product.name}</h2>
              <p className="text-gray-500">{item.product.brand}</p>
              <p className="font-semibold text-indigo-600">
                ₹{item.product.price}
              </p>

              <div className="flex items-center gap-4 mt-3">
                <button
                  className="btn btn-sm"
                  onClick={() => updateQty(item._id, item.quantity - 1)}
                >
                  -
                </button>

                <span className="font-bold">{item.quantity}</span>

                <button
                  className="btn btn-sm"
                  onClick={() => updateQty(item._id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="btn btn-error btn-sm"
              onClick={() => removeItem(item._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* TOTAL SECTION */}
      <div className="mt-10 text-right">
        <h2 className="text-2xl font-bold mb-3">Total: ₹{total}</h2>
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
