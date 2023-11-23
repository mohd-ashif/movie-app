
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import HomeContainer from './Components/Home';
import MoviesContainer from './Components/Movies';
import TvSeriesContainer from './Components/TvSeries';
import SearchContainer from './Components/Search';
import FooterComponents from './Components/Footer';
import HeaderComponents from './Components/Header';
import DetailsContainer from './Components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<HeaderComponents />
      <Routes>

        <Route path='/' element={<HomeContainer/>} /> 

        <Route path='/movies' element={<MoviesContainer />} /> 
        <Route path='/series' element={<TvSeriesContainer/>} />
        <Route path='/search' element={<SearchContainer/>} /> 
        <Route path='/details/:movieid/:mediatype' element={<DetailsContainer/>} /> 
        

      </Routes>
    
     
      </BrowserRouter>



     
    </div>
  );
}

export default App;
