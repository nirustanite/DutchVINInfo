import { takeEvery, put, call } from "redux-saga/effects";
import request from 'superagent';
import { api_key } from '../../config';

//action types
const types = {
    GET_DETAILS_REQUESTED: 'GET_DETAILS_REQUESTED',
    GET_DETAILS_SUCCEEDED: 'GET_DETAILS_SUCCEEDED',
    GET_DETAILS_FAILED: 'GET_DETAILS_FAILED',
    CLEAR_ERROR: 'CLEAR_ERROR'
};

// actions for questions
export const actions = {
    getDetails : (data) => ({
        type: types.GET_DETAILS_REQUESTED,
        data
    }),
    clearError: () => ({
        type: types.CLEAR_ERROR
    })
};

const initialState = {
    details: {},
    loading: false,
    error: ""
};

export default function reducer(state=initialState, action){
    switch(action.type){
        case types.GET_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case types.GET_DETAILS_SUCCEEDED:
            return{
                ...state,
                details: action.data,
                loading: false
            }
        case types.GET_DETAILS_FAILED:
            return{
                ...state,
                error: action.error,
                loading: false
            }
        case types.CLEAR_ERROR:
            return{
                ...state,
                error: "",
                details: {},
                loading: false
            }
        default:
            return state;
    }
};


export function* saga(){
    yield takeEvery(types.GET_DETAILS_REQUESTED, getVehicleDetails);
};
 
// saga for delay 5 seconds for create new questions
function* getVehicleDetails({ data }){
    try{
        const response = yield call(callVehicleDetails, { data });
        yield put({
            type: types.GET_DETAILS_SUCCEEDED,
            data: response.body
        });
    }
    catch(error){
        yield put({
            type: types.GET_DETAILS_FAILED,
            error: error.response.body.error 
        });
    } 
};

function callVehicleDetails({ data }) {
    return request
    .get(`https://api.overheid.io/voertuiggegevens/${data}`)
    .set('ovio-api-key', api_key);
}
