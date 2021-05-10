import React from "react";
import poster from "../img/poster.png";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const ScreenCard = ({
  Movie = "",
  Theatre = "",
  Capacity = 60,
  OccupiedCapacity = 33,
  ShowDate = "2021-05-09",
  showTime = "11:00:00",
}) => {
  return (
    <div className="col-lg-3 col-6">
      <div className="card mt-2">
        <img src={poster} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Theatre {Theatre}</h4>
          <p>
            Movie : <span>{Movie}</span>
          </p>
          <p>
            Capacity : <span>{Capacity}</span>
          </p>
          <p>
            OccupiedCapacity : <span>{OccupiedCapacity}</span>
          </p>
          <p>
            ShowDate : <span>{ShowDate}</span>
          </p>
          <p>
            ShowTime : <span>{showTime}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ScreenCard;
