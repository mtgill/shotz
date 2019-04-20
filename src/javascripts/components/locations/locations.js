import locationsData from '../../helpers/data/locationsData';
import './locations.scss';
import util from '../../helpers/util';

let locations = [];

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<h3>${location.name}</h3>`;
  });
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
