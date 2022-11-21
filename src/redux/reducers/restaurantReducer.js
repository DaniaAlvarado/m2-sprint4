import { restaurantTypes, foodTypes } from "../types/restaurantTypes";

const restaurantState = {
    restaurant: []
}

export const restautantReducer = (state = restaurantState, action) => {
    switch (action.type) {
        case restaurantTypes.RESTAURANT_GET:
            return{
                ...state,
                restaurant: action.payload.restaurant
            };
        case restaurantTypes.RESTAURANT_SINGLE_GET:
            return { 
                ...state, 
                restaurant: action.payload.restaurant 
            }
        case restaurantTypes.RESTAURANT_FILTERED:
            return {
                ...state,
                restaurant: action.payload.restaurant
            };
        case restaurantTypes.RESTAURANT_ADD:
            return {
                ...state,
                restaurant: [...state.restaurant, action.payload],
            };
        default:
            return state;
    };
};

const foodState = {
    food: []
}

export const foodReducer = (state= foodState, action) => {
    switch (action.type) {
        case foodTypes.FOOD_GET:
            return{
                ...state,
                food: action.payload.food
            };
        case foodTypes.FOOD_FILTERED:
            return{
                ...state,
                food: action.payload.food
            };
    
        default:
            return state ;
    }
}