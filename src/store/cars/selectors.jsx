const selectCars = (state) => state.cars.cars;

const selectSerch = (state) => state.cars.search

const selectCarsFilter = (state) => state.cars.carsFilter

const selectSelect = (state) => state.cars.selectCars

const selectPage = (state) => state.cars.page

const selectNewCar = (state) => state.cars.newCar

export { 
    selectCars, 
    selectSerch, 
    selectCarsFilter, 
    selectSelect, 
    selectPage,
    selectNewCar
};