import { combineReducers } from 'redux';
import navigationReducer from './PageNavigation/navigation.reducer';


const rootReducer = combineReducers({

    navigation: navigationReducer,

});

export default rootReducer;