import React, { useEffect, useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch user's cart
  const fetchCart = async () => {
    try {
      const res = await api.get("/api/cart/my-cart", {
        withCredentials: true,
      });
      setCart(res.data); // ✅ backend sends array directly
    } catch (error) {
      console.log("Cart load error:", error);
    } finally {
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

  // 🔥 Remove item (backend supported route)
  const removeItem = async (productId, size) => {
    try {
      const res = await api.delete(
        `/api/cart/remove/${productId}/${size}`,
        { withCredentials: true }
      );
      setCart(res.data.cart);
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  // 🔥 Total Price
  const total = cart.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
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
              src={item.productId.image}
              className="w-32 h-32 object-cover rounded-lg"
              alt={item.productId.name}
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold">
                {item.productId.name}
              </h2>
              <p className="text-gray-500">{item.productId.brand}</p>
              <p className="font-semibold text-indigo-600">
                ₹{item.productId.price}
              </p>

              <p className="mt-2">
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
