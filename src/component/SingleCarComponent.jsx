import React from 'react'

export const SingleCarComponent = ({ 
    car,
    onEdit,
    onDelete
}) => {
  return (
    <div>
        <h3>Brand: {car.brand}</h3>
        <h3>Model: {car.model}</h3>
        <h3>Year: {car.year}</h3>
        <h3>Max Speed: {car.max_speed}</h3>
        <h3>Automatic: {car.is_automatic}</h3>
        <h3>Engine: {car.engine}</h3>
        <h3>Numer Of Doors: {car.number_of_doors}</h3>
        <button
          type='submit'
          onClick={() => onEdit(car.id)}
        >
          Edit
        </button>
        <button
          type='submit'
          onClick={() => onDelete(car.id)}
        >
          Delete
        </button>
    </div>
  )
}
