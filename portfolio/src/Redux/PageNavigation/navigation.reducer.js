import { TO_ABOUTME_PAGE, TO_PROJECTS_PAGE } from './navigation.types';


    const INITIAL_STATE = {
        landingPage: true, 
        aboutmePage: false,
        projectsPage: false,
        count: 0,
    };

    const reducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case TO_ABOUTME_PAGE:

               return {

                 ...state, 
                 count: state.count + 1,
                 landingPage: false,
                 aboutmePage: true,
                 projectsPage: false

               };

            case TO_PROJECTS_PAGE:

               return {
                  ...state, count: 
                  state.count - 1,
                  landingPage: false,
                  aboutmePage: false,
                  projectsPage: true

               };

             default: return state;

        }

    };

    export default reducer;