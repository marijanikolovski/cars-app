import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
    sort: [],
    page: {
      current_page: 1,
      cars_per_page: 3
    },
    newCar: {
      brand: '',
      model: '',
      year: '',
      max_speed: '',
      is_automatic: false,
      engine: '',
      number_of_doors: '',
    },
    car:{}
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
      if (!state.selectCars.select.includes(action.payload)) {
        state.selectCars.select.push(action.payload)
      }
      state.selectCars.counter = state.selectCars.select.length;
    },

    setSelectAll(state) {
      state.selectCars.select = state.carsFilter.map((car) => car.id)
    }, 

    setDeselectAll(state) {
      state.selectCars.select = []
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
    },

    setPaginated(state, action) {
      state.page.current_page = action.payload
    },

    setNewCar(state, action) {
      state.newCar = action.payload
    },
  },
});

export const { setCars, deleteCar, setSerch, 
  setSelect, setSelectCar, setSelectAll, setDeselectAll, setSortByBrandAsc, 
  setSortByBranDesc, setSortByMaxSpeedAsc, setSortByMaxSpeedDesc, setPaginated,
  setNewCar
} = carsSlice.actions;

export default carsSlice.reducer;