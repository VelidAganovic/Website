import React from 'react';
import { connect } from "react-redux"
import './Portfolio.css';
import ReactDOM from 'react-dom';
import Background from './Components/Background/Background'
import IntroContent from './Pages/LandingPage/IntroContent'
import AboutMe from './Pages/AboutMe/AboutMe'
import {toAboutMePage, toProjectsPage,} from "./Redux/PageNavigation/navigation.actions"
import Navbar from "./Components/Navbar/Navbar"

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

class Portfolio extends React.Component {
    render() {
        var content;
        if(this.props.landingPage === true){
            content = <IntroContent></IntroContent>
        }
        if(this.props.aboutmePage === true){
            content = <AboutMe></AboutMe>
        }
        console.log(this.props.count)
        return (
            <div class="content">
                <Navbar></Navbar>
                {content}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)