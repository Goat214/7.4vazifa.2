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

    const newUser = {
      displayNickName,
      displayName,
      email,
      password,
      photoURL: photoURL || "https://via.placeholder.com/150",
    };

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
    <section style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.title}>Ro‘yxatdan o‘tish</h1>

        <div style={styles.formGroup}>
          <label style={styles.label}>Display Nickname:</label>
          <input
            type="text"
            value={displayNickName}
            onChange={(e) => setDisplayNickName(e.target.value)}
            style={styles.input}
            placeholder="Goat"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Display Name:</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={styles.input}
            placeholder="Abdulatif Kimsanaliyev"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="example@mail.com"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="123123"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Photo URL (optional):</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            style={styles.input}
            placeholder="https://example.com/photo.jpg"
          />
        </div>

        <button type="submit" style={styles.button}>
          Ro‘yxatdan o‘tish
        </button>

        <p style={styles.loginLink}>
          Akkauntingiz bormi?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "25px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "600",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  loginLink: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },
  link: {
    color: "#2563eb",
    textDecoration: "underline",
    marginLeft: "5px",
  },
};

export default Signup;
