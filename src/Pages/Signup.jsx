import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../app/features/autorSlice";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.auth);

  const [displayNickName, setDisplayNickName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = users.find((u) => u.email === email);
    if (exists) {
      alert("Bu email allaqachon ro'yxatdan o'tgan.");
      return;
    }

    dispatch(signup({ email, password }));
    navigate("/login");

    setDisplayNickName("");
    setDisplayName("");
    setEmail("");
    setPassword("");
    setPhotoURL("");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1517502166878-35c93a0072bb?auto=format&fit=crop&w=1600&q=80")`,
      }}
    >
      <div className="w-full max-w-md bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Ro‘yxatdan o‘tish
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Display Nickname
            </label>
            <input
              type="text"
              value={displayNickName}
              onChange={(e) => setDisplayNickName(e.target.value)}
              placeholder="Goat"
              className="w-full px-4 py-2 border border-white bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Display Name
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Abdulatif Kimsanaliyev"
              className="w-full px-4 py-2 border border-white bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123123"
              required
              className="w-full px-4 py-2 border border-white bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Photo URL (ixtiyoriy)
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border border-white bg-white/20 text-white placeholder-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>

        <p className="mt-6 text-center text-white text-sm">
          Akkauntingiz bormi?{" "}
          <Link to="/login" className="text-blue-200 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
