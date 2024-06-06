import React, { useState } from "react";
import axios from "axios";
import logoImg from "../assets/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setMessage("Invalid email format");
      return;
    }

    try {
      // Fetch the user from the database
      const response = await axios.get(
        `http://localhost:4000/users?email=${email}`
      );
      const user = response.data[0];

      if (!user) {
        setMessage("User does not exist");
        return;
      }

      if (user.password !== password) {
        setMessage("Incorrect password");
        return;
      }

      // Generate a session token
      const token = `sessionToken-${Date.now()}`;
      localStorage.setItem("sessionToken", token);

      // Navigate to a protected route
      navigate("/products");
    } catch (error) {
      setMessage("Failed to login");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container mt-4">
      <main className="form-signin w-50 m-auto">
        <form onSubmit={handleLogin}>
          <div className="text-center">
            <img
              className="mb-4 text-center"
              src={logoImg}
              alt=""
              width="72"
              height="57"
            />
          </div>

          <h1 className="h3 mb-3 text-center fw-normal">Airtribe-Buy Login</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control mb-4"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control mb-4"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          {message && <p className="mt-3 text-center">{message}</p>}
        </form>
      </main>
    </div>
  );
};

export default Login;
