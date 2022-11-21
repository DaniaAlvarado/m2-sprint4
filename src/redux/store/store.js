import { configureStore } from "@reduxjs/toolkit";
import { foodReducer, restautantReducer } from "../reducers/restaurantReducer";
import { userReducer } from "../reducers/userReducer";
const reducer = {
    user: userReducer,
    restaurantStore: restautantReducer,
    foodStore: foodReducer
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