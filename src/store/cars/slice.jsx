import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
    },

    deleteCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { setCars, deleteCar } = carsSlice.actions;

export default carsSlice.reducer;