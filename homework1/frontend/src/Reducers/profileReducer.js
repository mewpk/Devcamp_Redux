import { createSlice } from "@reduxjs/toolkit";
export const profileReducer = createSlice({
    // Name Reducer
    name: "Profile",
    // Name State 
    initialState: {
        firstname: "Stephen",
        lastname: "Strange",
        age: 45
    },
    // Action in Reducer
    reducers: {
        insertData: (state, action) => {
            // console.log(action.payload);
            state.firstname = action.payload.Firstname
            state.lastname = action.payload.Lastname
            state.age = action.payload.Age
        }
    }
}


)

// Export Reducer
export default profileReducer.reducer
// Export Action Can use in Reducer
export const { insertData } = profileReducer.actions;