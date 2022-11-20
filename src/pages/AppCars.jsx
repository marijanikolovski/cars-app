import React, { useState, useEffect } from 'react'
import CarsService from '../service/CarsService'
import { useHistory, Link } from 'react-router-dom';


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

  return (
    <div>
        <h2>Cars:</h2>
        <ul>
        {cars && cars.map((car) => 
            <li key={car.id}>
                <Link to={`/cars/${car.id}`}>Brend: {car.brand}</Link>
            </li>
        )}
        </ul>
    </div>
  )
}
