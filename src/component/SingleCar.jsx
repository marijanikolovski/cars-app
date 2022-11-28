import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CarsService from "../service/CarsService";
import {  deleteCar } from "../store/cars/slice";
import { setSelect } from "../store/cars/slice";
import { selectSelect } from "../store/cars/selectors";

export const SingleCar = ({
  id,
  brand,
  model,
  year,
  max_speed,
  is_automatic,
  engine,
  number_of_doors,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const selectCar = useSelector(selectSelect);

  const handleEditCar = (id) => {
    history.push(`/edit/${id}`);
  };

  const handleDeleteCar = async (id) => {
    const response = prompt("Enter 'ok' if you want to delete this car. ");

    if (response !== "ok") {
      return;
    }

    await CarsService.delete(id);

    dispatch(deleteCar(id));
  };

  return (
    <li style={{
      border: "1px solid " + (selectCar.select.includes(id) ? "red" : 'white'),
    }}>
      <h3>Brand: {brand}</h3>
      <h3>Model: {model}</h3>
      <h3>Year: {year}</h3>
      <h3>Max Speed: {max_speed}</h3>
      <h3>Automatic: {is_automatic}</h3>
      <h3>Engine: {engine}</h3>
      <h3>Numer Of Doors: {number_of_doors}</h3>
      <button onClick={() => handleEditCar(id)}>Edit</button>
      <button onClick={() => handleDeleteCar(id)}>Delete</button>
      <button onClick={() => dispatch(setSelect(id))}>Select</button>
    </li>
  );
};
