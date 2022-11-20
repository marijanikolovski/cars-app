import React from 'react'

export const SingleCar = ({ 
    id,
    brand,
    model,
    year,
    max_speed,
    is_automatic,
    engine,
    number_of_doors,
    onEdit,
    onDelete
}) => {
  return (
    <div>
        <h3>Brand: {brand}</h3>
        <h3>Model: {model}</h3>
        <h3>Year: {year}</h3>
        <h3>Max Speed: {max_speed}</h3>
        <h3>Automatic: {is_automatic}</h3>
        <h3>Engine: {engine}</h3>
        <h3>Numer Of Doors: {number_of_doors}</h3>
        <button
          type='submit'
          onClick={() => onEdit(id)}
        >
          Edit
        </button>
        <button
          type='submit'
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
    </div>
  )
}
