import { orderTypes } from "../types/orderTypes";

const orderState = {
    order: []
}

export const orderReducer = (state= orderState, action) => {
    switch (action.type) {
        case orderTypes.ORDER_GET:
            return{
                ...state,
                order: action.payload.order
            };
        case orderTypes.ORDER_ADD:
            return {
                ...state,
                order: [...state.order, action.payload],
            };
        default:
            return state ;
    }
}