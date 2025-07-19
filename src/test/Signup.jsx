import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useUser } from "./Contexts/UserContext";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState({});
  const navigate = useNavigate();
  // const { signup } = useUser();

  const newUser = {
    firstName,
    lastName,
    gender,
    email,
    password,
  };

  function handleSignUp(e) {
    e.preventDefault();
    // todo check user

    setErrors({
      firstName: firstName ? "" : "First Name cannot be empty!",
      lastName: lastName ? "" : "Last Name cannot be empty!",
      gender: gender ? "" : "Gender cannot be empty!",
      email: email ? "" : "Email cannot be empty!",
      password: password ? "" : "Password cannot be empty!",
    });

    if (firstName && lastName && gender && email && password) {
      // signup(newUser);
      navigate("/login");
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSignUp(e)}>
        <div>
          <label>First Name: </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="first name"
          />
        </div>
        {error.firstName && <p style={{ color: "red" }}>{error.firstName}</p>}

        <div>
          <label>Last Name: </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="last name"
          />
        </div>
        {error.lastName && <p style={{ color: "red" }}>{error.lastName}</p>}

        <div>
          <label>Gender: </label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>SELECT</option>
            <option value={"MALE"}>MALE</option>
            <option value={"FEMALE"}>FEMALE</option>
          </select>
        </div>
        {error.gender && <p style={{ color: "red" }}>{error.gender}</p>}

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
        <button type="submit">Sign Up</button>
      </form>

      <div>
        <Link to="/login">
          <p>Already have an account? Click to login!</p>
        </Link>
      </div>
    </div>
  );
}
