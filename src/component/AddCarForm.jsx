import React from "react";

export const AddCarForm = ({ 
  id,
  newCar, 
  setNewCar, 
  years, 
  engines, 
  onSubmit,
  onReset,
  onPreview 
}) => {
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label>Brand:</label>
            <input 
              required
              minLength='2'
              type="text" 
              value={newCar.brand}
              onChange={({target}) => 
                setNewCar({...newCar, brand: target.value})}
            />
            <label>Model</label>
            <input 
              required
              minLength='2'
              type="text" 
              value={newCar.model}
              onChange={({target}) => 
                setNewCar({...newCar, model: target.value})}
            />
            <select
              value={newCar.year}
              onChange={({ target }) =>
                setNewCar({ ...newCar, year: Number(target.value) })
              }
            >
              {years().map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <label>Max speed</label>
            <input
              type='number'
              value={newCar.max_speed}
              onChange={({ target }) =>
                setNewCar({ ...newCar, max_speed: target.value })
              }
            />
          <span>
            <label>Is it automatic?</label>
            <input
              type='checkbox'
              checked={newCar.is_automatic}
              onChange={({ target }) => {
                setNewCar({ ...newCar, is_automatic: target.checked });
            }}
          />
          </span>
          <h4>Choose an engine type:</h4>
          {engines.map((engine, index) => (
            <span key={index}>
              <input
                type='radio'
                name='engine'
                value={engine}
                onChange={() => setNewCar({ ...newCar, engine })}
                checked={engine === newCar.engine}
                required
            />
              {engine}
            </span>
            ))}
          <label>Number of doors</label>
          <input
            type='number'
            value={newCar.number_of_doors}
            onChange={({ target }) =>
              setNewCar({ ...newCar, number_of_doors: target.value })
            }
            required
          />
        <button type="submit">
          {id ? 'Edit' : 'Add car'}
        </button>
        <button 
          type="subimt" 
          onClick={onReset}
        >
          Reset
        </button>
        <button 
          type="submit" 
          onClick={onPreview}
        >
          Preview
        </button>
        </form>
    </div>
  )
}

