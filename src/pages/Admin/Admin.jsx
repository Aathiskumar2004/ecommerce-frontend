import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen flex bg-base-200">

      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-lg">
        <div className="p-4 text-2xl font-bold border-b">
          Admin Panel
        </div>

        <ul className="menu p-4 text-base-content">
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/addproduct">Add Product</Link>
          </li>
          <li>
            <Link to="/admin/manageproducts">Manage Products</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Top Navbar */}
        <div className="navbar bg-base-100 shadow rounded-lg mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Admin Dashboard
            </h1>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-error">
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow-xl p-6">
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p className="text-3xl font-bold mt-2 text-primary">
              120
            </p>
          </div>

          <div className="card bg-base-100 shadow-xl p-6">
            <h2 className="text-xl font-semibold">Total Products</h2>
            <p className="text-3xl font-bold mt-2 text-secondary">
              50
            </p>
          </div>

          <div className="card bg-base-100 shadow-xl p-6">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-3xl font-bold mt-2 text-accent">
              25
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Admin;
