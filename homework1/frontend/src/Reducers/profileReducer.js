import { createSlice } from "@reduxjs/toolkit";
export const profileReducer = createSlice({
    // Name Reducer
    name : "Profile",
    // Name State 
    initialState  : {
        firstname : "Stephen",
        lastname : "Strange",
        age : 45
    },
    // Action in Reducer
    reducers : {
        insertData : (state, _firstname , _lastname , _age) =>{
            state.firstname = _firstname
            state.lastname = _lastname
            state.age = _age
        }




    }




})

// Export Reducer
export default profileReducer.reducer
// Export Action Can use in Reducer
export const {insertData} = profileReducer.actions;