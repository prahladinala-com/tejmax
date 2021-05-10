import React from "react";
import poster from "../img/poster.png";
import { Link } from "react-router-dom";
import CartHolder from "./CartHolder";

const MovieCard = ({
  title = "Movie Name",
  genre = "Thriller",
  value = 1,
  btntext = "Book a Tickets",
  btnicon = "fas fa-shopping-cart",
  MYROUTE = "/user/cartholder/:userId",
  url = "/user/cartholder/",
}) => {
  return (
    <div className="col-lg-3 col-6">
      <div className="card mt-2">
        <img src={poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p>
            Genre : <span>{genre}</span>
          </p>
          <a href={url + value} className="btn btn-primary btn-block">
            <i className={btnicon}></i> &nbsp; {btntext}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
