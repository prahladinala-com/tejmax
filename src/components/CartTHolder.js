import React, { Component } from "react";
import Axios from "axios";
import Booking from "./Booking";

const url = window.location.href;
const value = url.charAt(url.length - 1);

const api = Axios.create({
  baseURL: "http://localhost:8000/theatre/" + value + "/screens",
});

export default class CartTHolder extends Component {
  state = {
    screens: [],
  };

  constructor() {
    super();
    console.log("Herehehrherhrhhehre");
    console.log(window.location.href);
    api
      .get("/")
      .then((res) => {
        console.log(res.data);
        this.setState({ screens: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Select A Movie from The Theatre</h1>
          <div className="row mb-5">
            {this.state.screens.map((screen, index) => (
              <div className="col-lg-3 col-6">
                <div className="card mt-2">
                  <div className="card-body">
                    <h4 className="card-title">Theatre {screen.theatreId}</h4>
                    <p>
                      Movie : <span>{screen.movieName}</span>
                    </p>
                    <p>
                      Capacity : <span>{screen.capacity}</span>
                    </p>
                    <p>
                      Available Seats :{" "}
                      <span>{screen.capacity - screen.occupiedCapacity}</span>
                    </p>
                    <p>
                      ShowDate : <span>{screen.showDate}</span>
                    </p>
                    <p>
                      ShowTime : <span>{screen.showTime}</span>
                    </p>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input
                          type="checkbox"
                          value={screen.screenId}
                          aria-label="Checkbox for following text input"
                        ></input>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with checkbox"
                      value="Check to Book Ticket"
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Booking></Booking>
      </div>
    );
  }
}
//export default CartTHolder;
