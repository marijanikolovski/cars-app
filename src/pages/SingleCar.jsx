import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { SingleCarComponent } from "../component/SingleCarComponent";
import CarsService from '../service/CarsService'

export const SingleCar = () => {
  const { id } = useParams();
  const history = useHistory();
  const [car, setCars] = useState({});

  const hendleGetCar = async () => {
    const data = await CarsService.get(id);
    setCars(data);
  };

  useEffect(() => {
    if (id) {
      hendleGetCar();
    }
  }, [id]);

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
    history.push('/cars');
}

  return (
    <div>
        <SingleCarComponent 
          car={car}
          key={car.id}
          onEdit={handleEditCar}
          onDelete={handleDeleteCar}
        />
    </div>
  );
};
