import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Axios from "axios";
const api = Axios.create({
  baseURL: "http://localhost:8100/movies",
});

class Movies extends Component {
  state = {
    movies: [],
  };

  constructor() {
    super();
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({ movies: res.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Movies</h1>
        <div className="row mb-5">
          {this.state.movies.map((movie) => (
            <MovieCard
              value={movie.id}
              title={movie.name}
              genre={movie.genre}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Movies;
