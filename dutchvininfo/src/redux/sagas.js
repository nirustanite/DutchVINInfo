import { fork, all } from "redux-saga/effects";
import map from "lodash/map";


const combinedSagas = [
  

];

export default function* root() {
    yield all(map(combinedSagas, fork));
}