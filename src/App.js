import { Link } from 'react-router-dom';
import { Router } from './Router'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
        </ul>
      </nav>
      <Router />
    </div>
  );
}

export default App;
