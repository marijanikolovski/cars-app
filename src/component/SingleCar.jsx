import React from 'react'

export const SingleCar = ({ 
    id,
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors,
    onEdit
}) => {
  return (
    <div>
        <h3>Brand: {brand}</h3>
        <h3>Model: {model}</h3>
        <h3>Year: {year}</h3>
        <h3>Max Speed: {maxSpeed}</h3>
        <h3>Automatic: {isAutomatic}</h3>
        <h3>Engine: {engine}</h3>
        <h3>Numer Of Doors: {numberOfDoors}</h3>
        <button
          type='submit'
          onClick={() => onEdit(id)}
        >
          {id ? 'Edit' : 'Add New Car'}
        </button>
    </div>
  )
}
