import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import CarsService from '../service/CarsService';
import { AddCarForm } from '../component/AddCarForm';

const years = (start = 1990, end = 2018) => {
    return Array.apply(0, Array(end - start + 1))
        .map((element, index) => index + start);
}
const engines = ['diesel', 'petrol', 'electric', 'hybrid'];

export const AddCar = () => {

    const history = useHistory()

    const [newCar, setNewCar] = useState({
        brand: '',
        model: '',
        year: years[0],
        maxSpeed: '',
        numberOfDoors: '',
        isAutomatic: false,
        engine: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        await CarsService.add(newCar);
        history.push('/cars');
    };

    return (
        <div>
            <AddCarForm 
                newCar={newCar}
                setNewCar={setNewCar}
                years={years}
                engines={engines}
                onSubmit={handleSubmit}
            />
        </div>
    )
}