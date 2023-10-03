import { createSlice} from "@reduxjs/toolkit";

import cars from "../../data/cars.json";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: cars,
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
   
  },
});

export const { changeSearchTerm } = carsSlice.actions;
export const carsReducer= carsSlice.reducer;
