import { useState } from "react";

export default function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  }

  console.log(newUser);

  return (
    <div>
      <form onSubmit={(e) => handleSignUp(e)}>
        <div>
          <label>First Name: </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            required
            placeholder="first name"
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            required
            placeholder="last name"
          />
        </div>
        <div>
          <label>Gender: </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option>SELECT</option>
            <option value={"MALE"}>MALE</option>
            <option value={"FEMALE"}>FEMALE</option>
          </select>
        </div>
        <div>
          <label>Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="email"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
