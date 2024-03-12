import { SETUP,SETUP_SUCCESS } from "./constants";

export function setup(){
    return{
        type:SETUP,
    }
}

export function setupSuccess(){
    return{
        type:SETUP_SUCCESS,
    }
}