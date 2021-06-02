import React from 'react';
import { connect } from "react-redux"
import './IntroContent.css';
import ReactDOM from 'react-dom';
import Background from '../../Components/Background/Background'
import {toAboutMePage, toProjectsPage,} from "../../Redux/PageNavigation/navigation.actions"

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

class IntroContent extends React.Component {
    render() {
        return (
            <div class="background">

            <Background></Background>
            <div className="intro-text">
            
            Hi, I'm <span class="name">Velid </span><span class="lastname">Aganovic</span>.
            <br></br>
            A Full Stack Web Developer.

            <button onClick={() => {this.props.toAboutMePage()}} class="animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Learn More
            </button>
            
        </div>
        </div>
        )
    }
}

// export default IntroContent;
export default connect(mapStateToProps, mapDispatchToProps)(IntroContent)