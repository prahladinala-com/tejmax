import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAutheticated } from "../auth/index";

const Signin = () => {
  const [values, setValues] = useState({
    email: "teja@gmail.com",
    password: "tejas",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (user && email === "admin@teja.com") {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <h1 className="py-5">Login to Tej Max</h1>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                required
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                required
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </div>
  );
};

export default Signin;
