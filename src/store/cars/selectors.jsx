const selectCars = (state) => state.cars.cars;

const selectSerch = (state) => state.cars.search

const selectCarsFilter = (state) => state.cars.carsFilter

const selectSelect = (state) => state.cars.selectCars

export { selectCars, selectSerch, selectCarsFilter, selectSelect };