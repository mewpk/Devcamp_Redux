// import { createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Reducers/profileReducer";
import productReducer from "./Reducers/productReducer";

const store = configureStore({
    reducer : {
        profile : profileReducer,
        product : productReducer

    }
})

export default store;