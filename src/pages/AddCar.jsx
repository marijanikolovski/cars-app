import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import CarsService from '../service/CarsService';
import { AddCarForm } from '../component/AddCarForm';

const years = (start = 1990, end = 2018) => {
    return Array.apply(0, Array(end - start + 1))
        .map((element, index) => index + start);
}
const engines = ['diesel', 'petrol', 'electric', 'hybrid'];

export const AddCar = () => {
    const { id } = useParams();
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


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await CarsService.edit(id, newCar);
        } else {
            await CarsService.add(newCar);
        }
        history.push('/cars');
    };

    const hadleResetForm = () => {
        setNewCar({
            brand: '',
            model: '',
            year: years[0],
            maxSpeed: '',
            numberOfDoors: '',
            isAutomatic: false,
            engine: '',    
        })
    }

    const handlePreviewForm = () => {
        alert(`
        Brand: ${newCar.brand} \n
        Model: ${newCar.model} \n
        Year: ${newCar.year} \n
        Max speed: ${newCar.maxSpeed} \n
        Number of doors: ${newCar.numberOfDoors} \n
        Automatic: ${newCar.isAutomatic ? 'Yes' : 'No'} \n
        Engine: ${newCar.engine} \n
        `);
    };

    const handleGetSingleCar = async (id) => {
        if (id) {
            const response = await CarsService.get(id);
            setNewCar(response);
        }
    }

    useEffect(() => {
        if (id) {
            handleGetSingleCar(id)
        }
    }, [id]);

    return (
        <div>
            <AddCarForm 
                newCar={newCar}
                setNewCar={setNewCar}
                years={years}
                engines={engines}
                onSubmit={handleOnSubmit}
                onReset={hadleResetForm}
                onPreview={handlePreviewForm}
            />
        </div>
    )
}