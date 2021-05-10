import React from "react";
import poster from "../img/poster.png";
//export default function Cart() {
const Cart = ({
  Movie = "BasketBall",
  Theatre = "10",
  Capacity = "400",
  OccupiedCapacity = "200",
  ShowDate = "2021-05-10",
  ShowTime = "10:00:00",
  btntext = "Book Tickets",
  btnicon = "fas fa-shopping-cart",
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="card mt-2">
            <img src={poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{Movie} &nbsp;</h5>
              <h5 className="card-title">{Theatre} &nbsp;</h5>
              <h5 className="card-title">{Capacity} &nbsp;</h5>
              <h5 className="card-title">{OccupiedCapacity} &nbsp;</h5>
              <h5 className="card-title">{ShowDate} &nbsp;</h5>
              <h5 className="card-title">{ShowTime} &nbsp;</h5>
              <a
                href={"http://localhost:8000/theatre/" + Theatre + "/screens"}
                className="btn btn-primary btn-block"
              >
                <i className={btnicon}></i> &nbsp; {btntext}
              </a>
            </div>
          </div>
        </div>
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

              <p>Available Tickets : 40</p>

              <h3>Total: $30</h3>
              <a
                href="http://localhost:8300/users"
                className="btn btn-primary btn-block"
              >
                Pay Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
