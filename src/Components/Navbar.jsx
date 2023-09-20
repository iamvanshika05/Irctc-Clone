import React from "react";
import airlogo from "../Images/air-logo.png";
import whitelogo from "../Images/whitelogo.png";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
import { useState } from "react";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <nav class="navbar  navbar-expand-md  px-0">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={airlogo} className="air-logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse d-flex justify-content-end navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ">
              <li class="nav-item dropdown">
                <a
                  class="nav-link text-dark dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa-solid fa-phone"></i>
                      1800110139
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa-solid fa-phone"></i>
                      0755 - 4090400
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa-solid fa-envelope"></i>
                      flights@irctc.co.in
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa-solid fa-file-contract"></i>
                      Corporate Enquiry
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="./Login.jsx">Login</a> */}

                <button
                  className="btn  ml-auto" onClick={() => setShowModal(true)}>
                  Login
                </button>
                <Login show={showModal} handleClose={handleCloseModal} />
              </li>
              <a class="navbar-brand" href="#">
                <img src={whitelogo} className="white-logo" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;
