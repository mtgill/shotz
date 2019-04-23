import locationsData from '../../helpers/data/locationsData';
import './locations.scss';
import util from '../../helpers/util';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
      selectedClass = '';
  }
  return selectedClass;
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="container">';
  domString += '<div class="row">';
  locations.forEach((location) => {
    domString += '<div class="card col-2 location-cards">';
    domString += `<div id=${location.id}>`;
    domString += `<h3 class="card-header ${shootTimeClass(location.shootTime)}">${location.name}</h3>`;
    domString += `<img src="${location.imageUrl}" class="card-img-top"></img>`;
    domString += `<p>${location.address}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  domString += '</div>';
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
