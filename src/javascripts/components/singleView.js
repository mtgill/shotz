import locationsData from '../helpers/data/locationsData';
import moviesData from '../helpers/data/moviesData';
// import locations from './locations/locations';
import util from '../helpers/util';

let movieArray = [];
let locationArray = [];
let selectedMovie = [];

const domStringBuilder = (values) => {
  let domString = '';
  domString += '<div class="container">';
  domString += '<div class="row">';
  values.forEach((location) => {
    domString += '<div class="card col-2 location-cards">';
    domString += `<div id=${location.id}><p>${location.id}</p>`;
    domString += `<img src="${location.imageUrl}" class="card-img-top"></img>`;
    domString += `<p>${location.address}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  domString += '</div>';
  util.printToDom('locations', domString);
};

const movieStringBuilder = (movieObj) => {
  const clearString = '';
  let domString = '';
  domString += '<div class="container">';
  domString += '<div class="row">';
  domString += '<button id="back" class="btn btn-danger">Back</button>';
  domString += '<div class="card col-3 movie-cards">';
  domString += `<h3 class="card-header"><a>${movieObj.name}</a></h3>`;
  domString += `<button id=${movieObj.id} class="btn btn-info">View More!</button>`;
  domString += '<ul class="list-group list-group-flush">';
  domString += `<li class="list-group-item"><b>Genre:</b> ${movieObj.genre}</li>`;
  domString += `<li class="list-group-item"><b>Release date:</b> ${movieObj.releaseDate}</li>`;
  domString += `<li class="list-group-item"><b>Description:</b> ${movieObj.description}</li>`;
  domString += `<li class="list-group-item"><b>Number of locations:</b> ${movieObj.locations.length}</li>`;
  domString += '</ul>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('movies', domString);
  util.printToDom('filters', clearString);
};

const test = () => {
  const tempArray = [];
  selectedMovie.forEach((movieLocation) => {
    const newCards = locationArray.filter((x) => {
      const hasLocation = x.id.includes(movieLocation);
      if (x.id === movieLocation) {
        tempArray.push(x);
        // console.error(movieLocation);
      }
      return hasLocation;
    });
    console.error(newCards);
    domStringBuilder(tempArray);
  });
};

const backEvent = () => {
  console.error('button works');
  // domStringBuilder(movieArray);
  // domStringBuilder(locationArray);
};

const backButtonEvent = () => {
  document.getElementById('back').addEventListener('click', backEvent);
};

const movieTest = (e) => {
  const buttonId = e.target.id;
  // let tempMovieArray = [];
  const movieId = movieArray.filter(x => x.id === buttonId);
  switch (buttonId) {
    case 'movie1':
      selectedMovie = movieId[0].locations;
      movieStringBuilder(movieId[0]);
      test();
      backButtonEvent();
      break;
    case 'movie2':
      selectedMovie = movieId[0].locations;
      movieStringBuilder(movieId[0]);
      test();
      break;
    case 'movie3':
      selectedMovie = movieId[0].locations;
      movieStringBuilder(movieId[0]);
      test();
      break;
    case 'movie4':
      selectedMovie = movieId[0].locations;
      movieStringBuilder(movieId[0]);
      test();
      break;
    default:
      console.error('default');
  }
};

const movieEvents = () => {
  document.getElementById('movie1').addEventListener('click', movieTest);
  document.getElementById('movie2').addEventListener('click', movieTest);
  document.getElementById('movie3').addEventListener('click', movieTest);
  document.getElementById('movie4').addEventListener('click', movieTest);
};

const moviesInit = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movieArray = movieResults;
    })
    .catch(err => console.error(err));
};

const locationsInit = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locationArray = locationResults;
      console.error(locationArray);
    })
    .catch(err => console.error(err));
};


export default { moviesInit, movieEvents, locationsInit };
