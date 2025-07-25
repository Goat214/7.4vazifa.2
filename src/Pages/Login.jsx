import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/features/autorSlice";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, isAuthenticated, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <p className="bg-red-100 text-red-700 p-3 rounded text-sm text-center">{error}</p>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Parol</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Kirish
          </button>
        </form>

        <div className="flex justify-between mt-6 text-sm text-gray-600">
          <p>Ro‘yxatdan o‘tmaganmisiz?</p>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
