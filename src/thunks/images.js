import unsplashService from '../service/unspleshService';
import {
    startRequest,
    requestFail,
    requestSuccessful,
} from '../actions/imagesActions';
import {
    preloaderShow,
    preloaderHide
} from "../actions/commonActions";

export const fetchImages = () => {
    return dispatch => {
        dispatch(preloaderShow());
        dispatch(startRequest());
        unsplashService.listPhotos(1, 15)
          .then(unsplashService.toJson)
          .then(json => {
            dispatch(requestSuccessful(response.data));
            dispatch(preloaderHide());
            console.log(json[14]);
          })
          .catch((error) => {
            dispatch(requestFail());
            dispatch(preloaderHide());
            console.log(error)
          });
    }
};

