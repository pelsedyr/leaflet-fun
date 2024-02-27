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

export default PlaceDisplay;