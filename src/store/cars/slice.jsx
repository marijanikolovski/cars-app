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
      select: [],
      counter: 0,
    },
    sort: []
  },
  reducers: {
    setCars: (state, action) => {
      state.cars = action.payload;
      state.carsFilter = [...action.payload];
    },

    deleteCar(state, action) {
      state.carsFilter = state.cars.filter((car) => car.id !== action.payload);
    },

    setSerch(state, action) {
      state.carsFilter = state.cars.filter((car) =>
        car.brand.includes(action. payload) || car.model.includes(action. payload)); 
    },

    setSelect(state, action) {
      state.selectCars.select = action.payload
      state.selectCars.counter += 1;
    },

    setSelectAll(state) {
      state.selectCars.select = state.carsFilter.map((car) => car)
    }, 

    setDeselectAll(state) {
      state.selectCars.select = null
    },

    setSortByBrandAsc(state) {
      state.sort = state.carsFilter.sort((a, b) => 
        (a.brand > b.brand) ? 1 : -1)
    },

    setSortByBranDesc(state) {
      state.sort = state.carsFilter.sort((a, b) => 
        (a.brand > b.brand) ? -1 : 1)
    },

    setSortByMaxSpeedAsc(state) {
      state.sort = state.carsFilter.sort((a, b) => 
        (a.max_speed - b.max_speed))
    },

    setSortByMaxSpeedDesc(state) {
      state.sort = state.carsFilter.sort((a, b) => 
        (b.max_speed - a.max_speed))
    }
  },
});

export const { setCars, deleteCar, setSerch, 
  setSelect, setSelectCar, setSelectAll, setDeselectAll, 
  setSortByBrandAsc, setSortByBranDesc, setSortByMaxSpeedAsc, setSortByMaxSpeedDesc} = carsSlice.actions;

export default carsSlice.reducer;