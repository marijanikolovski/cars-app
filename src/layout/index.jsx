import React, { children } from 'react'
import useAuth from '../hooks/useAuth'
import { Navbar } from './Navbar'

const DefaultLayout = ({children}) => {
    const { user, login} = useAuth();
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout