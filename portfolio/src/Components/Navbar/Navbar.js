import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import pf from '../../pf2.jpg'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          {/* <Link to='#' className='menu-bars'> */}
            <FaIcons.FaBars onClick={showSidebar} />
          {/* </Link> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              {/* <Link to='#' className='menu-bars'> */}
                <AiIcons.AiOutlineClose />
              {/* </Link> */}
            </li>
            <img class="image" src={pf}></img>
            {SidebarData.map((item, index) => {
              return (
                  
                <li key={index} className={item.cName}>
                  {/* <Link to={item.path}> */}
                  <a>
                    {item.icon}
                    <span class="nav-item">{item.title}</span>
                  {/* </Link> */}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    
  );
}

export default Navbar;