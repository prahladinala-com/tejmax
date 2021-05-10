import React, { Component } from "react";
import TheatreCard from "./TheatreCard";
import Axios from "axios";
const api = Axios.create({
  baseURL: "http://localhost:8000/theatres",
});
class Theatres extends Component {
  state = {
    theatres: [],
  };

  constructor() {
    super();
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({ theatres: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Theatres</h1>
        <div className="row mb-5">
          {this.state.theatres.map((theatre) => (
            <TheatreCard
              value={theatre.id}
              title={theatre.name}
              btntext="Check Tickets"
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Theatres;
