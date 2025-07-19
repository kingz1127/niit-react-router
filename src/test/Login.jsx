import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({});

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // todo check user

    setErrors({
      email: email ? "" : "Email cannot be empty!",
      password: password ? "" : "Password cannot be empty!",
    });

    if (email && password) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.email === email && user.password === password) {
        navigate("/app");
      } else {
        alert("invalid email or password");
      }
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <div>
          <label>Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <div>
          <label>Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
        </div>
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        <button type="submit">Login</button>
      </form>

      <div>
        <Link to="/signup">
          <p>Are you new here? Click to create an account!</p>
        </Link>
      </div>
    </div>
  );
}
