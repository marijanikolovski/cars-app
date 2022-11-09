import React, { useState, useEffect } from 'react'
import CarsService from '../service/CarsService'
import { SingleCar } from '../component/SingleCar' 
import { useHistory } from 'react-router-dom';


export const AppCars = () => {
    const history = useHistory();

    const [cars, setCars] = useState();

    const handleGetCars = async () => {
        const data = await CarsService.getAll();
        setCars(data);
    }

    useEffect(() => {
        handleGetCars()
    }, [])

    const handleEditCar = (id) => {
        history.push(`/edit/${id}`);
    }

    const handleDeleteCar = async (id) => {
        const response = prompt(
            "Enter 'ok' if you want to delete this car. "
          );
      
          if (response !== 'ok') {
            return;
        }

        await CarsService.delete(id);

        const data = await CarsService.getAll();
        setCars(data);
    }

  return (
    <div>
        <h2>Cars:</h2>
        <ul>
        {cars && cars.map((car) => 
                <SingleCar
                    key={car.id}
                    id={car.id}
                    brand={car.brand} 
                    model={car.model}
                    year={car.year}
                    maxSpeed={car.maxSpeed}
                    isAutomatic={car.isAutomatic}
                    engine={car.engine}
                    numberOfDoors={car.numberOfDoors}
                    onEdit={handleEditCar}
                    onDelete={handleDeleteCar}
                />
        )}
        </ul>
    </div>
  )
}
