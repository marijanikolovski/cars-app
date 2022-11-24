import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    search: {
      brand: "",
      model: "",
    },
    carsFilter: []
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
      state.carsFilter = [...action.payload];
    },

    deleteCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },

    setSerch(state, action) {
      state.carsFilter = state.cars.filter((car) =>
        car.brand.includes(action. payload) || car.model.includes(action. payload)); 
    }
  },
});

export const { setCars, deleteCar, setSerch } = carsSlice.actions;

export default carsSlice.reducer;