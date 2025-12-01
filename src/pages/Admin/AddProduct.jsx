import React, { useState } from "react";
import api from "../../api";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/product", form);
      alert("Product added!");
      setForm({ name: "", brand: "", price: "", image: "" });
    } catch (error) {
      alert(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="input input-bordered w-full"
          onChange={handleChange}
          value={form.name}
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          className="input input-bordered w-full"
          onChange={handleChange}
          value={form.brand}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          onChange={handleChange}
          value={form.price}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          onChange={handleChange}
          value={form.image}
        />

        <button className="btn btn-primary w-full">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
