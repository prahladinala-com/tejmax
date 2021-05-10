import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addTheatre } from "../admin/adminapicall";
import { isAutheticated } from "../auth";

const AddTheatre = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //Backend Request
    addTheatre({ name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };
  const successMessage = () => {
    if (success) {
      return (
        <div
          className="alert alert-success  alert-dismissible fade show"
          role="alert"
        >
          <h4>New Theater Added to Database</h4>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };
  const warningMessage = () => {
    if (error) {
      return (
        <div
          className="alert alert-danger  alert-dismissible fade show"
          role="alert"
        >
          <h4>Failed to Add New Theater</h4>
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };

  const myTheatreForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Enter the Theatre Name</p>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          className="form-control my-3"
          autoFocus
          required
          placeholder="For Ex. Marvel Theatre"
        />
        <button onClick={onSubmit} className="btn btn-outline-info">
          Add theatre
        </button>
      </div>
    </form>
  );

  return (
    <div className="container p-4">
      <h1 className="text-center">Add a new Theatre</h1>
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {warningMessage()}
          {myTheatreForm()}
          {goBack()}
        </div>
      </div>
    </div>
  );
};

export default AddTheatre;
