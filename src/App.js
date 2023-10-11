import logo from './logo.svg';
import './App.css';
import MovieList from './components/movieList.js';
import { SearchMovies } from './components/searchMovies';
//import 'dotenv/config'

function App() {
  return (
    <div className="App">
      <MovieList />
      <SearchMovies />
    </div>
  )
}


export default App;
