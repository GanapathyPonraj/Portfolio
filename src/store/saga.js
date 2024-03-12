import { put,takeEvery } from 'redux-saga/effects';
// import axios from 'axios'
import { SETUP, SETUP_SUCCESS } from './constants';

export function* setupTry(action){
    try{
        yield put ({ type:SETUP_SUCCESS})
    }catch(e){
        console.log(e.message);
    }
}
export function* watch(){
    yield takeEvery(SETUP,setupTry)
}