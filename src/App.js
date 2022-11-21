import { Link, useHistory } from 'react-router-dom';
import { Router } from './Router'
import { authService } from './service/AuthService';

function App() {
  const history = useHistory();
  
  async function handleLogout() {
    await authService.logout();
    console.log('logout je uspeo')
    history.push('/login')
  }

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
            <li>
              <Link to="/logout" onClick={handleLogout}>Logout</Link>
            </li>
        </ul>
      </nav>
      <Router />
    </div>
  );
}

export default App;
