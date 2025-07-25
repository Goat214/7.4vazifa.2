import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/features/autorSlice";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, } = useSelector((state) => state.auth);

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
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80")`,
      }}
    >
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <p className="bg-red-100 text-red-700 p-3 rounded text-sm text-center">
              {error}
            </p>
          )}

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-white bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Parol
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-white bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Kirish
          </button>
        </form>

        <div className="flex justify-between mt-6 text-sm text-white">
          <p>Ro‘yxatdan o‘tmaganmisiz?</p>
          <Link to="/signup" className="text-blue-200 hover:underline">
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
