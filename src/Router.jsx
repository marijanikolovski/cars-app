import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { SingleCar } from './pages/SingleCar';
import { AddCar } from './pages/AddCar'
import { AppCars } from './pages/AppCars'
import { AppLogin } from './pages/AppLogin';
import { AppRegister } from './pages/AppRegister';
import useAuth from './hooks/useAuth';

const AuthRoute = ({ children, ...rest }) => {
    const{ user } = useAuth()

    return (
        <Route {...rest}>
            {user.email ? children : <Redirect to="/login"/>}
        </Route>
        )
}

const GuestRoute = ({ children, ...rest }) => {
    const{ user } = useAuth()

    return (
        <Route {...rest}>
            {user.email ? <Redirect to="/cars"/> : children}
        </Route>
    )
}

export const Router = () => {
  return (
    <Switch>
        <AuthRoute exact path='/cars'>
            <AppCars />
        </AuthRoute>
        <AuthRoute path='/cars/:id'>
            <SingleCar />
        </AuthRoute>
        <AuthRoute path='/add'>
            <AddCar />
        </AuthRoute>
        <AuthRoute path='/edit/:id'>
            <AddCar />
        </AuthRoute>
        <GuestRoute path='/login'>
            <AppLogin />
        </GuestRoute>
        <GuestRoute path='/register'>
            <AppRegister />
        </GuestRoute>
    </Switch>
  )
}
