import { takeEvery, put, call } from "redux-saga/effects";
import request from 'superagent';
import { access_key } from '../../config';

//action types
const types = {
    GET_IMAGES_REQUESTED: 'GET_IMAGES_REQUESTED',
    GET_IMAGES_SUCCEEDED: 'GET_IMAGES_SUCCEEDED',
    GET_IMAGES_FAILED: 'GET_IMAGES_FAILED',
    CLEAR_ERROR: 'CLEAR_ERROR'
};

// actions for questions
export const actions = {
    getImages : (data, callback) => ({
        type: types.GET_IMAGES_REQUESTED,
        data,
        callback
    }),
    clearError: () => ({
        type: types.CLEAR_ERROR
    })
};

const initialState = {
    images: {},
    loading: false,
    error: ""
};

export default function reducer(state=initialState, action){
    switch(action.type){
        case types.GET_IMAGES_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case types.GET_IMAGES_SUCCEEDED:
            return{
                ...state,
                images: action.data,
                loading: false
            }
        case types.GET_IMAGES_FAILED:
            return{
                ...state,
                error: action.error,
                loading: false
            }
        case types.CLEAR_ERROR:
            return{
                ...state,
                error: "",
                loading: false
            }
        default:
            return state;
    }
};


export function* saga(){
    yield takeEvery(types.GET_IMAGES_REQUESTED, getVehicleImages);
};
 
// saga for delay 5 seconds for create new questions
function* getVehicleImages({ data, callback }){
    try{
        const response = yield call(callVehicleImages, { data });
        yield put({
            type: types.GET_IMAGES_SUCCEEDED,
            data: response.body
        });

        typeof callback === 'function' && callback(response.body)
    }
    catch(error){
        yield put({
            type: types.GET_IMAGES_FAILED,
            error: error.response.body.error 
        });
    } 
};

function callVehicleImages({ data }) {
    if(!data){
    return request
            .get(`https://api.unsplash.com/search/photos?query=cars`)
            .set('Accept-Version', 'v1')
            .set('Authorization', access_key);
    }
    else{
        return request
            .get(`https://api.unsplash.com/search/photos?query=${data}`)
            .set('Accept-Version', 'v1')
            .set('Authorization', access_key);
    }
    
}
