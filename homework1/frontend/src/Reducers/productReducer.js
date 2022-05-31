import { createSlice } from "@reduxjs/toolkit";
export const productReducer = createSlice({
    // Name Reducer
    name: "product",
    // Name State 
    initialState: [
        {
        id: 1,
        img: "https://picsum.photos/200/300",
        name: "Mushroom",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 2,
        img: "https://picsum.photos/200/300",
        name: "Carbonated",
        normalPrice: 45,
        sellPrice: 20,
        quantity: 30
    },
    {
        id: 3,
        img: "https://picsum.photos/200/300",
        name: "Artichokes",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 4,
        img: "https://picsum.photos/200/300",
        name: "Wine",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 5,
        img: "https://picsum.photos/200/300",
        name: "Juice",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 6,
        img: "https://picsum.photos/200/300",
        name: "Nutmeg",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 7,
        img: "https://picsum.photos/200/300",
        name: "Jerusalem",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 8,
        img: "https://picsum.photos/200/300",
        name: "Cheese",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 9,
        img: "https://picsum.photos/200/300",
        name: "Plastic",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 10,
        img: "https://picsum.photos/200/300",
        name: "Beer",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    }
    ,
    {
        id: 11,
        img: "https://picsum.photos/200/300",
        name: "Beer",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    }
    ,
    {
        id: 12,
        img: "https://picsum.photos/200/300",
        name: "Beer",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    }
    ],
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
export default productReducer.reducer
// Export Action Can use in Reducer
export const { insertData } = productReducer.actions;