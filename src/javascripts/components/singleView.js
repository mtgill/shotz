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
  console.error(values);
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
  util.printToDom('movies', domString);
};

const test = () => {
  const tempArray = [];
  selectedMovie.forEach((movieLocation) => {
    const newCards = locationArray.filter((x) => {
      const hasLocation = x.id.includes(movieLocation);
      if (x.id === movieLocation) {
        tempArray.push(x);
      }
      return hasLocation;
    });
    console.error(newCards);
    domStringBuilder(tempArray);
  });
};

const movieTest = (e) => {
  const buttonId = e.target.id;
  const movieId = movieArray.filter(x => x.id === buttonId);
  switch (buttonId) {
    case 'movie1':
      selectedMovie = movieId[0].locations;
      test();
      break;
    case 'movie2':
      selectedMovie = movieId[0].locations;
      test();
      break;
    case 'movie3':
      selectedMovie = movieId[0].locations;
      test();
      break;
    case 'movie4':
      selectedMovie = movieId[0].locations;
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
