// import React from 'react'
// import '../style/IconMenu.css'


// function IconMenu() {
//   return (
//     <div className='HomeSmallMenu'>
//         <div className='container '>
      
//       <ul className='nav row m-1 text-white nav-icons-wrap '>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1 items'>
//           <a className='nav-link'>
//              <div className="flightIcon"></div>
//              <span className=' spanclass'>Flights</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1 items'>
//         <a className='nav-link'>
//              <div className="hotelsIcon"></div>
//              <span className='text-white '>Hotels</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1' >
//        <a className='nav-link '>
//              <div className="busTicketIcon"></div>
//              <span className='text-white'>Bus Tickets</span>
//           </a>

//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
//        <a className='nav-link'>
//              <div className="retiringIcon"></div>
//              <span className='text-white'>Retiring Room</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
//        <a className='nav-link'>
//              <div className="loungeIcon"></div>
//              <span className='text-white'>Lounge</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
//        <a className='nav-link'>
//              <div className="tourPackageIcon"></div>
//              <span className='text-white'>Tour Package</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
//        <a className='nav-link'>
//              <div className="touristIcon"></div>
//              <span className='text-white'>Tourist Train</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
//        <a className='nav-link'>
//              <div className="buddhistTrainIcon"></div>
//              <span className='text-white'>Buddhist Train</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
//        <a className='nav-link'>
//              <div className="maharajasIcon"></div>
//              <span className='text-white'>Maharajas Train</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
//        <a className='nav-link'>
//              <div className="goldenChariotIcon"></div>
//              <span className='text-white'>Golden Chariot</span>
//           </a>
//        </li>
//        <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
//        <a className='nav-link'>
//              <div className="CruiseIcon"></div>
//              <span className='text-white'>Cruise</span>
//           </a>
//        </li>
//       </ul>
//   </div>
//     </div>
    
//   )
// }

// export default IconMenu


import React from 'react';
import { FaPlane, FaBus, FaHotel, FaBriefcase, FaBed, FaTrain, FaMap, FaUserFriends, FaChalkboardTeacher, FaChessKing } from 'react-icons/fa';
import "../style/IconMenu.css";

const IconMenu = () => {
  return (
    <div className="icon-menu bg-primary">
      <div></div>
      <div className="icon">
        <FaPlane className="menu-icon" />
        <span>Flights</span>
      </div>
      <div className="icon">
        <FaBus className="menu-icon" />
        <span>Bus Ticket</span>
      </div>
      <div className="icon">
        <FaHotel className="menu-icon" />
        <span>Hotel</span>
      </div>
      <div className="icon">
        <FaBriefcase className="menu-icon" />
        <span>Retiring</span>
      </div>
      <div className="icon">
        <FaBed className="menu-icon" />
        <span>Lounge</span>
      </div>
      <div className="icon">
        <FaTrain className="menu-icon" />
        <span>Tour Package</span>
      </div>
      <div className="icon">
        <FaMap className="menu-icon" />
        <span>Tourist</span>
      </div>
      <div className="icon">
        <FaUserFriends className="menu-icon" />
        <span>Buddhist Train</span>
      </div>
      <div className="icon">
        <FaChalkboardTeacher className="menu-icon" />
        <span>Maharajas</span>
      </div>
     
      <div className="icon">
        <FaChessKing className="menu-icon" />
        <span>Cruise</span>
      </div>
    </div>
  );
};

export default IconMenu;

