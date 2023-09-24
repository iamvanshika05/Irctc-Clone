import React from "react";
import banner1 from "../Images/Air_Home_banner1.png";
import banner2 from "../Images/Air_Home_banner2.png";
import banner3 from "../Images/Air_Home_banner5.png";
import home1 from "../Images/home-1.gif";
import home2 from "../Images/home-2.gif";
import home3 from "../Images/home-3.gif";
import "../style/MainSection.css";




const MainSection = () => {
  return (
    <>
    {/* <----------------------seacrchbox section-----------------> */}
    <div className="container-fluid ml-auto mr-auto col-8 FullSrchBox">
      <div className="row">
        <div class="col">
          <label>One way</label>
        </div>
        <div class="col">
          <label>Round Trip</label>
        </div>
        <div class="col">
          <label>Multicity</label>
        </div>
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="option1"
                  value="option1"
                />
                <label class="form-check-label" for="option1">
                  Defence Fare
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="option2"
                  value="option2"
                />
                <label class="form-check-label" for="option2">
                  Govt Employee
                </label>
              </div>
            </div>
          </form>
        </div>
        <div class="col text-right">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </button>
            <div class="dropdown-menu mainS" style={{    background: "#332b67" }}aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item D" href="#">
                Reschedule
              </a>
              <a class="dropdown-item D" href="#">
                Credit Shell
              </a>
              <a class="dropdown-item" href="#">
                Web Check
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </div>
    {/* <---------------carousel-section-------------> */}
    <div className="caraouselSection">
      <div
        id="carouselExampleControls" className="carousel slide c-1" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
          </div>
        </div>
        
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
       
      </div>
      </div>
      
    
      {/* <div className="rounded  p-4 d-flex justify-content-center i-1">
            <div className="row">
                <div className="col-md-4 ">
                <img src={home1} alt="Image 1" className="img-fluid" />
                </div>
                <div className="col-md-4">
                <img src={home2} alt="Image 2" className="img-fluid" />
                </div>
                <div className="col-md-4">
                <img src={home3} alt="Image 3" className="img-fluid" />
                </div>
            </div>
         </div> */}
         <div className="BgAdv">
            <div className="Adv">
                  <img src={home1} alt="Image 1" className="img-fluid" />
                  <img src={home2} alt="Image 2" className="img-fluid" />
                  <img src={home3} alt="Image 3" className="img-fluid" /> 
            </div>
         </div>
          
      </>
  );
};

export default MainSection;
