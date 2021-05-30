import { INCREMENT, DECREMENT } from './counter.types';
import { TO_ABOUTME_PAGE, TO_PROJECTS_PAGE } from './navigation.types';


    export const toAboutMePage = () => {

        return {

            type: TO_ABOUTME_PAGE,

        };

    };

    export const toProjectsPage = () => {

        return {

           type: TO_PROJECTS_PAGE,

        };

    };