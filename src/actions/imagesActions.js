import {
    START_REQUEST,
    REQUEST_SUCCESSFUL,
    REQUEST_FAIL,
} from '../constants/actionTypes';

export function startRequest() {
    return {type: START_REQUEST};
}

export function requestSuccessful(data) {
    return {
        type: REQUEST_SUCCESSFUL,
        payload: data
    };
}

export function requestFail() {
    return {type: REQUEST_FAIL};
}
