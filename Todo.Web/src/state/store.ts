import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;