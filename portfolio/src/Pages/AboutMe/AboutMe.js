import React from 'react';
import { connect } from "react-redux"
import './AboutMe.css';
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

class AboutMe extends React.Component {
    render() {
        console.log(this.props.count)
        return (
            <div class="about-me">
                
            <h1>test</h1>
        </div>
        )
    }
}

// export default IntroContent;
export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)