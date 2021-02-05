import { combineReducers } from "redux";
import details from './Details';
import images from './Images';

export default combineReducers({
    details: details.reducer,
    images: images.reducer
});