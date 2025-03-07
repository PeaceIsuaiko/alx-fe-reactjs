import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});  

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!username) validationErrors.username = "Username is required";
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({ username, email, password });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}  
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}  
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}  
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
