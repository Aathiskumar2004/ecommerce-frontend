import React, { useEffect, useState } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  // Load all products
  const loadProducts = async () => {
    try {
      const res = await api.get("/api/products");
      setProducts(res.data);
    } catch (err) {
      alert("Failed to load products");
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await api.delete(`/api/product/${id}`);
      alert("Product deleted");
      loadProducts(); // reload
    } catch (err) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

      <div className="mb-4">
        <Link to="/admin/add" className="btn btn-primary">
          + Add New Product
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-lg font-semibold">
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>

                <td>{p.name}</td>
                <td>{p.brand}</td>
                <td>₹{p.price}</td>

                <td>
                  <Link
                    to={`/admin/edit/${p._id}`}
                    className="btn btn-sm btn-info"
                  >
                    Edit
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-5 text-lg text-gray-600">
                  No products found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
