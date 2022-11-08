import React from 'react'

export const SingleCar = ({ 
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors
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
    </div>
  )
}
