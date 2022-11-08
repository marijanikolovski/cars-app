import React, { useState, useEffect } from 'react'
import CarsService from '../service/CarsService'
import { SingleCar } from '../component/SingleCar' 

export const AppCars = () => {
    const [cars, setCars] = useState();

    const handleGetCars = async () => {
        const data = await CarsService.getAll();
        setCars(data);
    }

    useEffect(() => {
        handleGetCars()
    }, [])


  return (
    <div>
        <h2>Cars:</h2>
        <ul>
        {cars && cars.map((car) => 
                <SingleCar
                    key={car.id}
                    brand={car.brand} 
                    model={car.model}
                    year={car.year}
                    maxSpeed={car.maxSpeed}
                    isAutomatic={car.isAutomatic}
                    engine={car.engine}
                    numberOfDoors={car.numberOfDoors}
                />
        )}
        </ul>
    </div>
  )
}
