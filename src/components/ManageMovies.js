import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteMovie, getMovies } from '../admin/adminapicall'
const ManageMovies = () => {

    const [movies, setMovies] = useState([])
    const preload = () => {
        getMovies().then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setMovies(data)
            }
        })
    }

    useEffect(() => {
        preload()
    }, [])

    const deleteThisMovie = movieId => {
        deleteMovie(movieId).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                preload()
            }
        })
    }

    const goBack = () => (
        <div className="mt-5">
            <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">
                Admin Home
            </Link>
        </div>
    )

    return (
        <div className="container">
            <h1 className="text-center">Manage Movies</h1>

            {goBack()}
            <h2 className="mb-4">All Movies:</h2>
            <div className="row">
                <div className="col-12">

                    {movies.map((movie, index) => {
                        return (
                            <div key={index} className="row text-center mb-2 ">
                                <div className="col-4">
                                    <h4 className=" text-left">{movie.name}</h4>
                                </div>
                                <div className="col-4">
                                    <Link
                                        className="btn btn-success"
                                        to={`/admin/movie/update/movieId`}
                                    >
                                        <span className="">Update</span>
                                    </Link>
                                </div>
                                <div className="col-4">
                                    <button onClick={() => {
                                        deleteThisMovie(movie._id)
                                    }} className="btn btn-danger">
                                        Delete
              </button>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div >
        </div >
    )
}
export default ManageMovies