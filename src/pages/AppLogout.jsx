import React from 'react'
import useAuth from '../hooks/useAuth';
import { Navbar } from '../layout/Navbar';

export const AppLogout = () => {
    const { user, logout } = useAuth
  
    async function handleLogout() {
      await logout();
      console.log('logout successfully')
    }
  return (
    <div>
        <Navbar 
            onLogout={handleLogout}
        />
    </div>
  )
}
