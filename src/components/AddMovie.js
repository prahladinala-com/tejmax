import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addMovie, getTheatres } from "../admin/adminapicall";

const AddMovie = () => {
  const [values, setValues] = useState({
    name: "",
    genre: "",
    price: "",
    seats: "",
    theatres: [],
    theatre: "",
    loading: false,
    error: "",
    addedMovie: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    name,
    genre,
    price,
    seats,
    theatres,
    theatre,
    loading,
    error,
    addedMovie,
    getaRedirect,
    formData,
  } = values;

  const preload = () => {
    getTheatres().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.err });
      } else {
        setValues({ ...values, theatres: data, formData: new FormData() });
      }
    });
  };
  useEffect(() => {
    preload();
  }, []);
  const createProductForm = () => (
    <form>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="name"
          className="form-control"
          placeholder="Movie Name"
          required
          value={name}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("genre")}
          name="genre"
          className="form-control"
          placeholder="Genre"
          required
          value={genre}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          name="price"
          type="number"
          className="form-control"
          placeholder="Ticket Price"
          required
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
          required
        >
          {theatres &&
            theatres.map((thea, index) => (
              <option key={index} value={thea._id}>
                {thea.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("seats")}
          name="seats"
          type="number"
          className="form-control"
          placeholder="Available Seats"
          required
          value={seats}
        />
      </div>

      <button type="submit" onClick={onSubmit} className="btn btn-outline-info">
        Add Movie
      </button>
    </form>
  );

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    addMovie(formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          genre: "",
          price: "",
          stock: "",
          loading: false,
          addedMovie: data.name,
        });
      }
    });
  };
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };
  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  const successMessage = () => (
    <div
      className="alert alert-success  alert-dismissible fade show"
      role="alert"
      style={{ display: addedMovie ? "" : "none" }}
    >
      <h4>New Movie Added to Database</h4>
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
  const warningMessage = () => (
    <div
      className="alert alert-success  alert-dismissible fade show"
      role="alert"
      style={{ display: addedMovie ? "none" : "" }}
    >
      <h4>New Movie Added to Database</h4>
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

  return (
    <div className="container">
      <h1 className="text-center">Add a new Movie</h1>
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          {goBack()}
          {successMessage()}
          {warningMessage()}
          {createProductForm()}
        </div>
      </div>
    </div>
  );
};
export default AddMovie;
