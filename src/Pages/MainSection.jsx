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
      <div className="caraouselSection">
      <div
        id="carouselExampleControls" className="carousel slide c-1" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="banner1" />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="banner2" />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="banner3" />
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
                  <img src={home1} alt="Not found" className="img-fluid" />
                  <img src={home2} alt="Not found" className="img-fluid" />
                  <img src={home3} alt="Not found" className="img-fluid" /> 
            </div>
         </div>
          
      </>
  );
};

export default MainSection;
