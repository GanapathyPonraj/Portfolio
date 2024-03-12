import { SETUP_SUCCESS } from "./constants";

export const initialState = {
    status : '',
}

function reducer (state=initialState,action){
    switch(action.type){
        case SETUP_SUCCESS:
            return {...state,status:'active'}
        default:
            return state;
    }
}

export default reducer;