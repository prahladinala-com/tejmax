import React from "react"
import { Link } from "react-router-dom"
import { isAutheticated } from "../auth/index"

const adminLeftSide = () => {
    return (
        <div className="card">
            <h5 className="card-header bg-dark text-white">Admin Navigation</h5>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/add/theatre" className="nav-link text-info">Add Theater</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/theatres" className="nav-link text-info">Manage Theaters</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/add/movie" className="nav-link text-info">Add Movies</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/movies" className="nav-link text-info">Manage Movies</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/orders" className="nav-link text-info">Manage Bookings</Link>
                </li>
            </ul>
        </div>
    )
}
const adminRightSide = () => {
    return (
        <div className="card mb-4">
            <h4 className="card-header">Admin Information</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="badge badge-info mr-2">Name:</span> Admin
                </li>
                <li className="list-group-item">
                    <span className="badge badge-info mr-2">Email:</span> admin@tejmax.com
                </li>
                <li className="list-group-item">
                    <span className="badge badge-danger mr-2">Admin Area</span>
                </li>
            </ul>
        </div>
    )
}

const AdminDashboard = () => {
    const { name, email } = isAutheticated()

    return (
        <div className="container-fluid bg-info p-4">
            <h1 className="text-center text-white mt-5">Welcome to Admin Dashboard</h1>
            <p className="text-center text-white">You can Manage all the Movie Tickets and Theatres here</p>
            <div className="row  mb-5 mt-2">
                <div className="col-3 ">
                    {adminLeftSide()}
                </div>
                <div className="col-9">
                    {adminRightSide()}
                </div>

            </div>
        </div>
    )
}

export default AdminDashboard