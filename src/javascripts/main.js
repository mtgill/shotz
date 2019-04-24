import '../styles/main.scss';
import movies from './components/movies/movies';
import locations from './components/locations/locations';
import singleView from './components/singleView';

const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
  singleView.moviesInit();
  singleView.locationsInit();
};

init();
