// src/components/SignupForm.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../hooks"; // Adjust the import path as necessary
import { signupUser } from "../store/signupSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    user_type: "",
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const { loading, error } = useSelector((state: RootState) => state.signup);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Dispatch the signup action
    dispatch<any>(signupUser(formData));

    // dispatch(signupUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ padding: "10px" }}>User Type</label>
      <select
        name="user_type"
        value={formData.user_type}
        onChange={handleChange}
      >
        <option value="">Select a user type</option>
        <option value="researcher">Researcher</option>
        <option value="investor">Investor</option>
        <option value="institution_staff">Institution Staff</option>
        <option value="service_provider">Service Provider</option>
      </select>
<br /> <br />
      <label style={{ padding: "10px" }}>First Name</label>
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="Enter your first name"
      />
<br /> <br />
      <label style={{ padding: "10px" }} >Last Name</label>
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Enter your last name"
      />
<br /> <br />
      <label style={{ padding: "10px" }}>Username</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Choose a username"
      />
<br /> <br />
      <label style={{ padding: "10px" }}>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
<br /> <br />
      <label style={{ padding: "10px" }}>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Create a password"
      />
<br /> <br />
      {error && <p className="error">Error: {error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};
