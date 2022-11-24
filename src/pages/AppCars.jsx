import React, { useState, useEffect } from 'react'
import CarsService from '../service/CarsService'
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCars } from '../store/cars/selectors';
import { setCars } from '../store/cars/slice';
import { SingleCar } from '../component/SingleCar';
import { CarsSearch } from '../component/CarsSearch';

export const AppCars = () => {
    const history = useHistory();

    const cars = useSelector(selectCars)
    const dispatch = useDispatch()

    const [selectedCarIds, setSelectedCarIds] = useState({});

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
        <ul>
            {cars.map((car) => (
              <SingleCar
                {...car}
                key={car.id}
              />
            ))}
          </ul>
    </div>
  )
}
