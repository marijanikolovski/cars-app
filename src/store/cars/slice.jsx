import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    search: null
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },

    deleteCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },

    setSerch(state, action) {
      state.search = action.payload; 
    }
  },
});

export const { setCars, deleteCar, setSerch } = carsSlice.actions;

export default carsSlice.reducer;