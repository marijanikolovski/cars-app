import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import CarsService from '../service/CarsService';
import { AddCarForm } from '../component/AddCarForm';
import { setNewCar } from '../store/cars/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewCar } from '../store/cars/selectors';

const years = (start = 1990, end = 2018) => {
    return Array.apply(0, Array(end - start + 1))
        .map((element, index) => index + start);
}
const engines = ['diesel', 'petrol', 'electric', 'hybrid'];

export const AddCar = () => {
    const newCar = useSelector(selectNewCar)
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory()

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            dispatch(setNewCar(await CarsService.edit(id, newCar)));
        } else {
            dispatch(setNewCar(await CarsService.add(newCar)));
        }
        history.push('/cars');
    };

    const hadleResetForm = () => {
        dispatch(setNewCar({
            brand: '',
            model: '',
            year: years[0],
            max_speed: '',
            is_automatic: false,
            engine: '',
            number_of_doors: '',  
        }))
    }

    const handlePreviewForm = () => {
        alert(`
        Brand: ${newCar.brand} \n
        Model: ${newCar.model} \n
        Year: ${newCar.year} \n
        Max speed: ${newCar.max_speed} \n
        Number of doors: ${newCar.number_of_doors} \n
        Automatic: ${newCar.is_automatic ? 'Yes' : 'No'} \n
        Engine: ${newCar.engine} \n
        `);
    };

    const handleGetSingleCar = async (id) => {
        if (id) {
            const response = await CarsService.get(id) ;
            dispatch(setNewCar(response)) ;
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
                id={id}
                years={years}
                engines={engines}
                onSubmit={handleOnSubmit}
                onReset={hadleResetForm}
                onPreview={handlePreviewForm}
            />
        </div>
    )
}