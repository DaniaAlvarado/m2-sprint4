import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducer";
const reducer = {
    user: userReducer,
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