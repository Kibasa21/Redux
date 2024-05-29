import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }, //Não era necessário botar em objeto esse reducer, mas se tivessemos outros slices, teria que por, já que reducer da config so aceita um objeto.
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;