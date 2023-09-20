import React from 'react'



const iconsMenu = (props) => {
  return (
    <div>
        <li className='nav-item'>
          <a className='nav-link'>
             <div className="flightIcon"></div>
             <span className='text-white'>{props.title}</span>
          </a>
       </li>
       {/* <iconsMenu title="shishu kumar flight"/> */}
    </div>
  )
}

export default iconsMenu