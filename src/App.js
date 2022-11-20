import { Link } from 'react-router-dom';
import { Router } from './Router'
import authService from './service/AuthService';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/add">Create new car</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div>
  );
}

export default App;
