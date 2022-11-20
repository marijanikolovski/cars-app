import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { AddCar } from './pages/AddCar'
import { AppCars } from './pages/AppCars'
import { AppLogin } from './pages/AppLogin';

export const Router = () => {
  return (
    <Switch>
        <Route exact path='/cars'>
            <AppCars />
        </Route>
        <Route path='/add'>
            <AddCar />
        </Route>
        <Route path='/edit/:id'>
            <AddCar />
        </Route>
        <Route path='/login'>
            <AppLogin />
        </Route>
    </Switch>
  )
}
