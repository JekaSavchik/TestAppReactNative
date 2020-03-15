import {
    START_REQUEST,
    REQUEST_SUCCESSFUL,
    REQUEST_FAIL
} from '../constants/actionTypes';

const initialState = {
    images: [],
    loading: false,
    isError: false,
};

const imagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case REQUEST_SUCCESSFUL:
            return {
                images: action.payload,
                loading: false,
                isError: false,
            };

        case REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                isError: true,
            };

        default:
            return state;
    }
};

export default imagesReducer;
