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


const domStringBuilder = (values) => {
  let domString = '';
  domString += '<div class="container">';
  domString += '<div class="row">';
  values.forEach((location) => {
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

const sort = (e) => {
  const buttonId = e.target.id;
  let filterArray = [];
  locations.forEach((location) => {
    if (location.shootTime === 'After Dark' && buttonId === 'dark') {
      filterArray.push(location);
    } else if (location.shootTime === 'Morning' && buttonId === 'morning') {
      filterArray.push(location);
    } else if (location.shootTime === 'Evening' && buttonId === 'evening') {
      filterArray.push(location);
    } else if (location.shootTime === 'Afternoon' && buttonId === 'afternoon') {
      filterArray.push(location);
    } else if (buttonId === 'all') {
      filterArray = locations;
    }
    domStringBuilder(filterArray);
  });
};

// const filterButtonEvent = (e) => {
//   const buttonId = e.target.id;
//   const darkLocations = locations.filter(x => x.shootTime === 'After Dark');
//   switch (buttonId) {
//     case 'dark':
//       domStringBuilder(darkLocations);
//       break;
//     default:
//       domStringBuilder(locations);
//   }
// };

const buttonEvents = () => {
  document.getElementById('dark').addEventListener('click', sort);
  document.getElementById('morning').addEventListener('click', sort);
  document.getElementById('evening').addEventListener('click', sort);
  document.getElementById('afternoon').addEventListener('click', sort);
  document.getElementById('all').addEventListener('click', sort);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder(locations);
      buttonEvents();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
