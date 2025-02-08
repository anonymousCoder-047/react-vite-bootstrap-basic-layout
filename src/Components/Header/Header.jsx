
import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"_blank"}>Logo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/dashboard/home"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/dashboard/orders"}>Orders</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={"_blank"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={"/projects/1"}>Project 1</Link></li>
                                    <li><Link className="dropdown-item" to={"/projects/2"}>Project 2</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to={"/projects/3"}>Project 3</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
  }
  
  export default Header
  