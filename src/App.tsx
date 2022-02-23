import './App.css';
import ApiData from './components/apidata';


function App() {

      return (
        <div className="App">
          <div className='menu-bar'>
            <div className='logo'>
              <h1>GeoIP</h1>
              <h2>Check IP Localisation</h2>
            </div>
            <nav>
              <a>ReadMe</a>
              <a>GitHub</a>
              <a>Mbednarz.website</a>
            </nav>
          </div>
          <ApiData />
        </div>
      );
    }

export default App;
