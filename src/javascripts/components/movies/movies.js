import moviesData from '../../helpers/data/moviesData';
import './movies.scss';
import util from '../../helpers/util';
import singleView from '../singleView';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="container">';
  domString += '<div class="row">';
  movies.forEach((movie) => {
    domString += '<div class="card col-3 movie-cards">';
    domString += `<h3 class="card-header"><a>${movie.name}</a></h3>`;
    domString += `<button id=${movie.id} class="btn btn-info">View More!</button>`;
    domString += '<ul class="list-group list-group-flush">';
    domString += `<li class="list-group-item"><b>Genre:</b> ${movie.genre}</li>`;
    domString += `<li class="list-group-item"><b>Release date:</b> ${movie.releaseDate}</li>`;
    domString += `<li class="list-group-item"><b>Description:</b> ${movie.description}</li>`;
    domString += `<li class="list-group-item"><b>Number of locations:</b> ${movie.locations.length}</li>`;
    domString += '</ul>';
    domString += '</div>';
  });
  domString += '</div>';
  domString += '</div>';
  util.printToDom('movies', domString);
};


const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder();
      singleView.movieEvents();
      // movieTest();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
