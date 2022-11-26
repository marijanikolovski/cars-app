import React from "react";
import { useDispatch } from "react-redux";
import { setPaginated } from "../store/cars/slice";

export const Pagination = ({ totalCars, carsPerPage }) => {
  const dispatch = useDispatch();
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => dispatch(setPaginated(page))}>
            {page}
          </button>
        );
      })}
    </div>
  );
};
