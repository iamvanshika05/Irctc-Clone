import React from "react";
import "../style/IconMenu.css";

function IconMenu() {
  return (
    <div className="HomeSmallMenu">
        <ul className="Icon-container">
          <li className="Icon-container-item">
            <a className="">
              <div className="flightIcon"></div>
              <span className="">Flights</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="hotelsIcon"></div>
              <span className="">Hotels</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className=" ">
              <div className="busTicketIcon"></div>
              <span className="">Bus Tickets</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="retiringIcon"></div>
              <span className="">Retiring Room</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="loungeIcon"></div>
              <span className="">Lounge</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="tourPackageIcon"></div>
              <span className="">Tour Package</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="touristIcon"></div>
              <span className="">Tourist Train</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="buddhistTrainIcon"></div>
              <span className="">Buddhist Train</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="maharajasIcon"></div>
              <span className="">Maharajas Train</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="goldenChariotIcon"></div>
              <span className="">Golden Chariot</span>
            </a>
          </li>

          <li className="Icon-container-item">
            <a className="">
              <div className="CruiseIcon"></div>
              <span className="">Cruise</span>
            </a>
          </li>
        </ul>
    </div>
  );
}

export default IconMenu;
