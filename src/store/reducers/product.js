import * as ActionTypes from "../actionTypes";

const initialState = {
    productArr: []
}

export const productReducer = (state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.ADD_PRODUCT:
            return{
                ...state,
                productArr: [...state.productArr, action.payload]
            } 
        case ActionTypes.SAVE_PRODUCTS:
            return{
                ...state,
                productArr: action.payload
            }  
        case ActionTypes.DELETE_PRODUCT:
            let arr = state.productArr.filter(item=>item.id!==action.payload);
            return{
                ...state,
                productArr: arr
            }
        default: return state; 
    }
}