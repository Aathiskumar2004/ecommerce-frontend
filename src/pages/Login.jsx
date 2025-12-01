import React, { useState } from "react";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import api from "../api";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useOutletContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      // 🔥 Login API Call
      const res = await api.post("/api/auth/login", form);

      // 🔥 Save token
      localStorage.setItem("token", res.data.token);

      // 🔥 Save user details
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // 🔥 Clear old cart when switching accounts
      localStorage.removeItem("cart");

      // 🔥 Update login state
      setIsLoggedIn(true);

      alert("Login Successful");

      // 🔥 Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {
      const msg = error.response?.data?.message || "Login failed";

      alert(msg);

      // 🔥 Redirect if user not found
      if (msg.toLowerCase().includes("user not found")) {
        navigate("/register");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">

          <h2 className="text-3xl font-bold text-center mb-6">
            Login Account
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                onChange={handleChange}
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-full mt-4">
              Login
            </button>

          </form>

          {/* Register Redirect */}
          <p className="text-center mt-6 text-sm">
            Don’t have an account?
            <Link to="/register" className="text-primary font-semibold ml-1">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
