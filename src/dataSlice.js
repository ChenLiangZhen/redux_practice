import {createSlice} from "@reduxjs/toolkit";

const initialState = {

    data1: {
        name: "",
        email:"",
        password: "",
    },

    data2: {
        name: "",
        email:"",
        password: "",
    }
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData1: (state, action) => {
            state.data1 = action.payload
        },
        setData2: (state, action) => {
            state.data2 = action.payload
        }
    }
})

export const selectGeneral = (state) => state.data
export const { setData } = dataSlice.actions
export default dataSlice.reducer