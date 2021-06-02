import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import pf from '../../pf3.jpg'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const size = 3;
        var lines = [];
        for (var i = 0; i < size; i++) {
        lines.push(<div class="line2"></div>);
        }
  return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          {/* <Link to='#' className='menu-bars'> */}
            <FaIcons.FaBars size={48} onClick={showSidebar} />
          {/* </Link> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              {/* <Link to='#' className='menu-bars'> */}
                <AiIcons.AiOutlineClose size={48}/>
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
            <div class="lines2" >
              {lines}
              </div>
          </ul>
        </nav>
      </IconContext.Provider>
    
  );
}

export default Navbar;