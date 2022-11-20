import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { SingleCar } from './pages/SingleCar';
import { AddCar } from './pages/AddCar'
import { AppCars } from './pages/AppCars'
import { AppLogin } from './pages/AppLogin';
import { AppRegister } from './pages/AppRegister';

export const Router = () => {
  return (
    <Switch>
        <Route exact path='/cars'>
            <AppCars />
        </Route>
        <Route path='/cars/:id'>
            <SingleCar />
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
        <Route path='/register'>
            <AppRegister />
        </Route>
    </Switch>
  )
}
