import React from 'react'
import { Link } from "react-router-dom"
import notfound from "../img/404.png"

export default function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6  .offset-md-3  .offset-lg-3">
          <div className="text-center">
            <img className="img-fluid" src={notfound} />
            <Link to="/" className="btn btn-info">Go back to Home Page</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
