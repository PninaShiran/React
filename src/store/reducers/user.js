import * as ActionTypes from "../actionTypes";

const initialState = {
    currentUser: null
}

export const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.ENTER_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        case ActionTypes.EXIT_USER:
            return{
                ...state,
                currentUser:null
            }
        default: return state;
    }
}