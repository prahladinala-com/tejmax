import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTheatres, deleteTheatre } from "../admin/adminapicall";
const ManageTheatres = () => {
  const [theatres, setTheatres] = useState([]);
  const preload = () => {
    getTheatres().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTheatres(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisTheatre = (theatreId) => {
    deleteTheatre(theatreId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };
  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
        Admin Home
      </Link>
    </div>
  );

  return (
    <div className="container">
      <h1 className="text-center">Manage Theatres</h1>

      {goBack()}
      <h2 className="mb-4">All Theatres:</h2>
      <div className="row">
        <div className="col-12">
          {theatres.map((theatre, index) => {
            return (
              <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h4 className=" text-left">{theatre.name}</h4>
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/admin/theatre/update/theatreId`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button
                    onClick={() => {
                      deleteThisTheatre(theatre._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ManageTheatres;
