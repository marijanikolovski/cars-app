import React from "react";
import { Link, useHistory } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import { authService } from "../service/AuthService";

export const Navbar = ({onLogout}) => {
    // const history = useHistory();
    const{ user } = useAuth()

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
          <Link to="/logout" onClick={onLogout}>
            Logout
          </Link>
        </li>
        )}
      </ul>
    </nav>
  );
};
