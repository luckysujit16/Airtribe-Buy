import React, { useState } from "react";
import axios from "axios";
import logoImg from "../assets/react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isEmailValid = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
  };

  const isPasswordStrong = (password) => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return re.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setMessage("Invalid email format");
      return;
    }

    if (!isPasswordStrong(password)) {
      setMessage(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
      );
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      // Check if the user already exists
      const response = await axios.get(
        `http://localhost:4000/users?email=${email}`
      );
      if (response.data.length > 0) {
        setMessage("User with this email already exists");
        return;
      }

      // Register the new user
      await axios.post("http://localhost:4000/users", { email, password });
      setMessage("User registered successfully");
    } catch (error) {
      setMessage("Failed to register user");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container mt-4">
      <main className="form-signin w-50 m-auto">
        <form onSubmit={handleRegister}>
          <div className="text-center">
            <img
              className="mb-4 text-center"
              src={logoImg}
              alt=""
              width="72"
              height="57"
            />
          </div>

          <h1 className="h3 mb-3 text-center fw-normal">
            Airtribe-Buy Register
          </h1>

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
          <div className="form-floating position-relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control mb-4"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              onClick={toggleConfirmPasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
              />
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
            Register
          </button>
          <span className="text-center">
            <a href="/login">Login</a>
          </span>

          {message && (
            <p className="mt-3 text-center text-danger fw-bold">{message}</p>
          )}
        </form>
      </main>
    </div>
  );
};

export default Register;
