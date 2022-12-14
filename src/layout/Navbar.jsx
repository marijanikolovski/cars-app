import React from "react";
import { Link, useHistory } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

export const Navbar = () => {
    const history = useHistory();
    const{ user, logout } = useAuth()

    async function handleLogout() {
      await logout();
      console.log('logout successfully')
      history.push('/login');
    }

  return (
    <nav>
      <ul>
        {user.email && (
          <li>
            <Link to="/cars">Cars</Link>
          </li>
        )}
        {user.email && (
        <li>
          <Link to="/add">Create new car</Link>
        </li>
        )}
        {!user.email && (
        <li>
          <Link to="/login">Login</Link>
        </li>
        )}
        {!user.email && (
        <li>
          <Link to="/register">Register</Link>
        </li>
        )}
        {user.email && (
        <li>
          <button type="submit" onClick={handleLogout}>
            Logout
          </button>
        </li>
        )}
      </ul>
    </nav>
  );
};
