import { useOutletContext, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  const navigate = useNavigate();

  const increaseQty = (id, size) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id, size) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeItem = (id, size) => {
    setCart(
      cart.filter(
        (item) => !(item.id === id && item.size === size)
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
              >
                {/* Left Image */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    className="w-24 h-24 object-cover rounded-lg border"
                    alt={item.name}
                  />

                  {/* Details */}
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-gray-500">
                      Price: ₹{item.price}
                    </p>

                    <p className="text-sm text-gray-600">
                      Size: {item.size}
                    </p>

                    <p className="text-sm text-gray-400">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => decreaseQty(item.id, item.size)}
                  >
                    -
                  </button>
                  <span className="font-semibold px-2">
                    {item.quantity}
                  </span>
                  <button
                    className="btn btn-sm btn-outline"
                    onClick={() => increaseQty(item.id, item.size)}
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  className="btn btn-sm btn-error ml-4"
                  onClick={() => removeItem(item.id, item.size)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-8 flex justify-end">
            <div className="bg-base-200 p-5 rounded-xl shadow-md w-full md:w-1/3">
              <h2 className="text-xl font-bold mb-2">
                Total Amount
              </h2>
              <p className="text-2xl font-semibold text-indigo-600">
                ₹{total}
              </p>

              <button
                className="btn btn-primary w-full mt-4"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
