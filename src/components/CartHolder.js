import React, { Component } from "react";
import Axios from "axios";
import Booking from "./Booking";

const url = window.location.href;
const value = url.charAt(url.length - 1);
const api = Axios.create({
  baseURL: "http://localhost:8100/movie/" + value + "/theatres",
});

export default class CartHolder extends Component {
  state = {
    screens: [],
  };

  changeInp(evt) {
    this.setState({ textVal: evt.target.value });
  }
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.addValue = this.addValue.bind(this);
    this.updateInput = this.updateInput.bind(this);

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

  addValue(evt) {
    evt.preventDefault();
    if (this.state.value !== undefined) {
      alert("Your input value is: " + this.state.value);
    } else {
      console.log("I'm hereeeeeeeeeee");
    }
  }

  updateInput(evt) {
    this.state = { value: evt.target.value };
  }

  getInitialState() {
    return { input: "" };
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick() {
    console.log(this.state.input);
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1>Movies</h1>
          <div className="row mb-5">
            {this.props.screens.map((screen, index) => (
              <div className="col-lg-3 col-6">
                <div className="card mt-2">
                  <div className="card-body">
                    <h4 className="card-title">Theatre {screen.theatreId}</h4>
                    <p>
                      Movie : <span>{screen.movieId}</span>
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
                          type="text"
                          value="Enter Number of tickets"
                          readOnly
                        ></input>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with checkbox"
                      value={this.state.textVal}
                      autofocus="autofocus"
                      onChange={this.updateInput}
                    ></input>
                    <a
                      href={"http://localhost:8300/user/" + this.handleClick}
                      className="btn btn-primary btn-block"
                    >
                      Pay Online
                    </a>
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
//export default CartHolder;
