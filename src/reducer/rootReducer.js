import { combineReducers } from 'redux';

import commonReducer from './commonReducer';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
    commonStore: commonReducer,
    imagesStore: imagesReducer,
});

export default rootReducer;
