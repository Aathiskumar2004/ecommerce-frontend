import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);

  // 🟦 Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/api/product/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        alert("Product not found!");
        navigate("/admin/manage-products");
      }
    };

    fetchProduct();
  }, [id, navigate]);

  // 🟩 Input change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // 🟧 Update product submit
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/api/product/${id}`, product);
      alert("Product updated successfully ✔");
      navigate("/admin/manage-products");
    } catch (err) {
      alert("Update failed!");
    }
  };

  if (loading) return <p className="p-5 text-center">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-base-200 rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Edit Product</h1>

      <form onSubmit={handleUpdate} className="space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="input input-bordered w-full"
        />

        {/* Brand */}
        <input
          type="text"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="input input-bordered w-full"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="input input-bordered w-full"
        />

        {/* Image */}
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        {/* Button */}
        <button className="btn btn-primary w-full">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
