import { createSlice } from "@reduxjs/toolkit";
export const profileReducer = createSlice({
    // Name Reducer
    name : "Profile",
    // Name State 
    initialState  : {
        name : "Stephen",
        lastname : "Strange",
        age : 45
    },
    // Action in Reducer
    reducers : {
        insertData : (state,name,lastname,age) =>{
            state.name = name,
            state.lastname = lastname,
            state.age = age
        }




    }




})

// Export Reducer
export default profileReducer.reducer
// Export Action Can use in Reducer
export const {insertData} = profileReducer.actions;