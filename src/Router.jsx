import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { AppCars } from './pages/AppCars';


export const Router = () => {
  return (
    <Switch>
        <Route exact path='/cars'>
            <AppCars />
        </Route>
    </Switch>
  )
}
