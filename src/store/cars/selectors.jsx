const selectCars = (state) => state.cars.cars;

const selectSerch = (state) => state.cars.search

const selectCarsFilter = (state) => state.cars.carsFilter

export { selectCars, selectSerch, selectCarsFilter };