import React from "react";
import poster from "../img/poster.png";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Booking = ({
  title = "Movie Name",
  genre = "Thriller",
  value = 1,
  btntext = "Book a Tickets",
  btnicon = "fas fa-shopping-cart",
}) => {
  return (
    <div className="col-lg-3 cartborder">
      <h2>Cart Section</h2>

      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label for="exampleFormControlSelect1">
              Select No of Film Tickets
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <a
            href="http://localhost:8300/users"
            className="btn btn-primary btn-block"
          >
            Pay Online
          </a>
        </div>
      </div>
    </div>
  );
};
export default Booking;
