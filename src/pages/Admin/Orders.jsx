import React from "react";

const Orders = () => {
  const orders = [
    { id: 1, name: "John", amount: 2500, status: "Delivered" },
    { id: 2, name: "Arun", amount: 1800, status: "Pending" },
    { id: 3, name: "Kumar", amount: 3200, status: "Shipped" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.name}</td>
              <td>₹{order.amount}</td>
              <td>
                <span className="badge badge-info">
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
