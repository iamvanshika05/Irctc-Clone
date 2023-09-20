import React from 'react'
import '../style/IconMenu.css'


function IconMenu() {
  return (
    <div className='HomeSmallMenu'>
        <div className='container  flex flex-wrap'>
      
      <ul className='nav row m-1 text-white nav-icons-wrap flex flex-wrap'>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1 items'>
          <a className='nav-link'>
             <div className="flightIcon"></div>
             <span className=' spanclass'>Flights</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1 items'>
        <a className='nav-link'>
             <div className="hotelsIcon"></div>
             <span className='text-white '>Hotels</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1' >
       <a className='nav-link '>
             <div className="busTicketIcon"></div>
             <span className='text-white'>Bus Tickets</span>
          </a>

       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
       <a className='nav-link'>
             <div className="retiringIcon"></div>
             <span className='text-white'>Retiring Room</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
       <a className='nav-link'>
             <div className="loungeIcon"></div>
             <span className='text-white'>Lounge</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
       <a className='nav-link'>
             <div className="tourPackageIcon"></div>
             <span className='text-white'>Tour Package</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
       <a className='nav-link'>
             <div className="touristIcon"></div>
             <span className='text-white'>Tourist Train</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
       <a className='nav-link'>
             <div className="buddhistTrainIcon"></div>
             <span className='text-white'>Buddhist Train</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
       <a className='nav-link'>
             <div className="maharajasIcon"></div>
             <span className='text-white'>Maharajas Train</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
       <a className='nav-link'>
             <div className="goldenChariotIcon"></div>
             <span className='text-white'>Golden Chariot</span>
          </a>
       </li>
       <li className='nav-item col-md-2 col-sm-6 col-lg-1'>
       <a className='nav-link'>
             <div className="CruiseIcon"></div>
             <span className='text-white'>Cruise</span>
          </a>
       </li>
      </ul>
  </div>
    </div>
    
  )
}

export default IconMenu