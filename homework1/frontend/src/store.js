// import { createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./Reducers/profileReducer";

const store = configureStore({
    reducer : {
        profile : profileReducer

    }
})

export default store;