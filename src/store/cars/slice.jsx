import { createSlice } from "@reduxjs/toolkit";

export const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    search: {
      brand: "",
      model: "",
    },
    carsFilter: [],
    selectCars: {
      select: null,
      counter: 0,
      nova: {}
    }
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
    },

    setSelect(state, action) {
      state.selectCars.select = action.payload
      state.selectCars.counter += 1;
    },
    setDeselectAll(state, action) {
      state.selectCars.select = null
    }

  },
});

export const { setCars, deleteCar, setSerch, setSelect, setSelectCar, selectSelectAll, setDeselectAll } = carsSlice.actions;

export default carsSlice.reducer;