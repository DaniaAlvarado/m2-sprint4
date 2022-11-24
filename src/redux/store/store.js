import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "../reducers/orderReducer";
import { foodReducer, restautantReducer } from "../reducers/restaurantReducer";
import { userReducer } from "../reducers/userReducer";
const reducer = {
    userStore: userReducer,
    restaurantStore: restautantReducer,
    foodStore: foodReducer,
    orderStore: orderReducer
};
const store = configureStore({
    reducer,
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export default store;