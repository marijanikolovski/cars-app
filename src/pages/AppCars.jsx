import React, { useState, useEffect } from 'react'
import CarsService from '../service/CarsService'
import { useSelector, useDispatch } from 'react-redux';
import { selectCars } from '../store/cars/selectors';
import { setCars } from '../store/cars/slice';
import { SingleCar } from '../component/SingleCar';
import { CarsSearch } from '../component/CarsSearch';
import { selectCarsFilter } from '../store/cars/selectors';
import { selectSelect } from '../store/cars/selectors';

export const AppCars = () => {
    const carsFilter = useSelector(selectCarsFilter)
    const selectCar = useSelector(selectSelect)

    const cars = useSelector(selectCars)
    const dispatch = useDispatch()

    const handleGetCars = async () => {
        dispatch(setCars(await CarsService.getAll())) ;
    }

    useEffect(() => {
        handleGetCars()
    }, [])

  return (
    <div>
      <header>
         <CarsSearch />
      </header>
        <h2>Cars:</h2>
        <h3>Number of selected cars: {selectCar.counter}</h3>
        <ul>
            {carsFilter.map((car) => (
              <SingleCar
                {...car} 
                key={car.id}
              />
            ))}
            {carsFilter.length === 0 && (<h2>There is no wanted car.</h2>)}
          </ul>
    </div>
  )
}
