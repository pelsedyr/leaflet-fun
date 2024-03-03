import PropTypes from 'prop-types';

function PlaceDisplay(props) {
    let { road, suburb, village, town, city, municipality, county, state, country } = props;
    return (
        <div>
            <p>{road}</p>
            <p>{suburb}</p>
            <p>{village}</p>
            <p>{town}</p>
            <p>{city}</p>
            <p>{municipality}</p>
            <p>{county}</p>
            <p>{state}</p>
            <p>{country}</p>
        </div>
    )
}

PlaceDisplay.propTypes = {
    road: PropTypes.string,
    suburb: PropTypes.string,
    village: PropTypes.string,
    town: PropTypes.string,
    city: PropTypes.string,
    municipality: PropTypes.string,
    county: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string
  };

export default PlaceDisplay;