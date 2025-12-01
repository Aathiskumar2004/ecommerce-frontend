import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useOutletContext();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });

  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (
      !address.name ||
      !address.phone ||
      !address.street ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please fill all address fields");
      return;
    }

    // ✅ Show DaisyUI modal
    setShowModal(true);
  };

  const handleSuccess = () => {
    setCart([]);
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Address Form */}
      <div className="bg-white shadow p-5 rounded mb-6">
        <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" placeholder="Full Name" className="input input-bordered w-full" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" className="input input-bordered w-full" onChange={handleChange} />
          <input name="street" placeholder="Street Address" className="input input-bordered w-full col-span-2" onChange={handleChange} />
          <input name="city" placeholder="City" className="input input-bordered w-full" onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" className="input input-bordered w-full" onChange={handleChange} />
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white shadow p-5 rounded mb-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-2">
            <div className="flex items-center gap-4">
              <img src={item.image} className="w-14 h-14 object-cover rounded" alt={item.name} />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
            <p>₹{item.price * item.quantity}</p>
          </div>
        ))}

        <div className="text-right font-bold text-xl mt-4">
          Total: ₹{total}
        </div>
      </div>

      <button className="btn btn-primary w-full" onClick={placeOrder}>
        Place Order
      </button>

      {/* ✅ DaisyUI Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box text-center">
            <h3 className="font-bold text-2xl text-green-600">
              ✅ Order Placed Successfully!
            </h3>
            <p className="py-4">Thank you for shopping with us 😊</p>

            <div className="modal-action justify-center">
              <button
                className="btn btn-success"
                onClick={handleSuccess}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
