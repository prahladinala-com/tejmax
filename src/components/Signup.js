import React, { useState } from "react";
import { signup } from "../auth/index";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: 2223338888,
    error: "",
    success: false,
  });

  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    error,
    success,
  } = values;

  const handleChange = (firstName) => (event) => {
    setValues({ ...values, error: false, [firstName]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ firstName, lastName, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error Signin Up"));
  };
  const signUpForm = () => {
    return (
      <div className="container">
        <h1 className="py-5">Signup to Tej Max</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputFirstName">First Name</label>
            <input
              type="text"
              onChange={handleChange("firstName")}
              required
              class="form-control"
              id="exampleInputFirstName"
              aria-describedby="emailHelp"
              placeholder="First Name"
              value={firstName}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputLastName">Last Name</label>
            <input
              type="text"
              onChange={handleChange("lastName")}
              required
              class="form-control"
              id="exampleInputLastName"
              aria-describedby="emailHelp"
              placeholder="Last Name"
              value={lastName}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              onChange={handleChange("email")}
              required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              onChange={handleChange("password")}
              required
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPhone">Phone Number</label>
            <input
              type="text"
              onChange={handleChange("phone")}
              required
              class="form-control"
              id="exampleInputPhone"
              aria-describedby="emailHelp"
              placeholder="Phone Number"
              value={phone}
            />
          </div>
          <button onClick={onSubmit} class="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </div>
  );
};

export default Signup;
