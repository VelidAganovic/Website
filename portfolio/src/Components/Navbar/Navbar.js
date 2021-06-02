import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import pf from '../../pf3.jpg'
import {toAboutMePage, toProjectsPage,} from "../../Redux/PageNavigation/navigation.actions"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
      count: state.navigation.count,
      landingPage: state.navigation.landingPage, 
      aboutmePage: state.navigation.aboutmePage,
      projectsPage: state.navigation.projectsPage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      toAboutMePage: () => dispatch(toAboutMePage()),

      toProjectsPage: () => dispatch(toProjectsPage()),
  }
}



function Navbar(props) {

  var [sidebar, setSidebar] = useState(false);
  if(props.aboutmePage === true){
    sidebar = true;
  }
  console.log(sidebar)

  const showSidebar = () => setSidebar(!sidebar);
  return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
            <FaIcons.FaBars size={48} onClick={showSidebar} />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <AiIcons.AiOutlineClose size={48}/>
            </li>
            <img class="image" src={pf}></img>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a>
                    {item.icon}
                    <span class="nav-item">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)