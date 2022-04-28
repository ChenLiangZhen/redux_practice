import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    numbers: {
        displayValue: 0
    }
}

const dataSlice = createSlice({

    name: "data",
    initialState,

    reducers: {
        increaseValue: (state, action) => {
            state.numbers.displayValue ++
        },

        decreaseValue: (state, action) => {
            state.numbers.displayValue --
        },
    }

})

export const selectNumbers = (state) => state.data.numbers
export const { increaseValue, decreaseValue } = dataSlice.actions
export default dataSlice.reducer