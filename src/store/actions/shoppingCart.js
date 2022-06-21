import * as ActionTypes from "../actionTypes";

export const addToCart = (product)=>{
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (id)=>{
    return{
        type: ActionTypes.REMOVE_FROM_CART,
        payload: id
    }
}

export const saveCurrentOrder = (user)=>{
    return{
        type: ActionTypes.CURRENT_ORDER,
        payload: user
    }
}

export const sendOrder = ()=>{
    return{
        type: ActionTypes.SEND_ORDER
    }
}
