import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",     // default user
    adminCode: ""     // only when admin signup
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const res = await api.post("/api/auth/register", form);

      alert(res.data.message);

      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 p-6">

        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form className="space-y-4" onSubmit={handleRegister}>
          
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            onChange={handleChange}
          />

          {/* Role Select */}
          <select
            name="role"
            className="select select-bordered w-full"
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          {/* Admin Code Field (optional) */}
          {form.role === "admin" && (
            <input
              type="text"
              name="adminCode"
              placeholder="Enter Admin Code"
              className="input input-bordered w-full"
              onChange={handleChange}
            />
          )}

          {/* Register Button */}
          <button className="btn btn-primary w-full mt-2">Register</button>
        </form>

        <p className="text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-primary ml-1 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
