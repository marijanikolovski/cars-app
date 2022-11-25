import React, { useState, useEffect } from 'react'
import CarsService from '../service/CarsService'
import { useSelector, useDispatch } from 'react-redux';
import { selectCars } from '../store/cars/selectors';
import { setCars } from '../store/cars/slice';
import { SingleCar } from '../component/SingleCar';
import { CarsSearch } from '../component/CarsSearch';
import { selectCarsFilter } from '../store/cars/selectors';
import { selectSelect } from '../store/cars/selectors';
import { setDeselectAll } from '../store/cars/slice';
import { setSelectAll } from '../store/cars/slice';
import { setSortByBrandAsc } from '../store/cars/slice';
import { setSortByBranDesc } from '../store/cars/slice';
import { setSortByMaxSpeedAsc } from '../store/cars/slice';
import { setSortByMaxSpeedDesc } from '../store/cars/slice';

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
        <button onClick={() => dispatch(setSelectAll())}>Select All</button>
        <button onClick={() => dispatch(setDeselectAll())}>Deselect All</button>
        <div>
          <button onClick={() => dispatch(setSortByBrandAsc())}>Sort by Brand asc</button>
          <button onClick={() => dispatch(setSortByBranDesc())}>Sort by Brand desc</button>
          <button onClick={() => dispatch(setSortByMaxSpeedAsc())}>Sort by Max speed asc</button>
          <button onClick={() => dispatch(setSortByMaxSpeedDesc())}>Sort by Max speed desc</button>
        </div>
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
