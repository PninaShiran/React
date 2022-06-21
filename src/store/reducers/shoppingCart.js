import * as ActionTypes from "../actionTypes";

const initialState = {
    orderArr: [],
    currentOrder:null
}
export const shoppingCartReducer = (state=initialState, action)=>{
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            let arr = state.orderArr.filter(item=>item.id!==action.payload.id);
            arr.push(action.payload);
            return{
                ...state,
                orderArr: arr
            }
        case ActionTypes.REMOVE_FROM_CART:
            let prr = state.orderArr.filter(item=>item.id!==action.payload);
            return{
                ...state,
                orderArr: prr
            }
        case ActionTypes.CURRENT_ORDER:
            return{
                ...state,
                currentOrder: action.payload
            }
        case ActionTypes.SEND_ORDER:
            return{
                ...state,
                orderArr: []
            }
        default: return state;
    }
}

export const sum = (arr=[])=>{
    let sum = 0;
    let cnt = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i].price*arr[i].amount;
        cnt += Number(arr[i].amount);
    }
    return {sum:sum, cnt:cnt};
}