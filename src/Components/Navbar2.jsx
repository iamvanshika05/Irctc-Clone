import React from 'react';

import '../style/Navbar2.css'; // Create this CSS file for custom styling
import airlogo from "../Images/air-logo.png";
import whitelogo from "../Images/whitelogo.png";
import Login from "../Pages/Login";
import { useState } from "react";


const Navbar2 = () => {
    const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <nav className="navbar navbar-expand-md px-0">
      <div className="container-fluid">
        {/* Left Logo */}
        <a className="navbar-brand" href="#">
           <img src={airlogo} className="air-logo" />
        </a>

        {/* Navbar Toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>

        {/* Right Menu */}
        <div className="collapse navbar-collapse justify-content-end ml-auto" id="navbarNav"> 
        <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-phone"></i>
                      1800110139
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-phone"></i>
                      0755 - 4090400
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-envelope"></i>
                      flights@irctc.co.in
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-file-contract"></i>
                      Corporate Enquiry
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="./Login.jsx">Login</a> */}

                <button
                  className="btn  ml-auto" onClick={() => setShowModal(true)}>
                  Login
                </button>
                <Login show={showModal} handleClose={handleCloseModal} />
              </li>
              <a className="navbar-brand" href="#">
                <img src={whitelogo} className="white-logo" />
              </a>
            </ul>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
