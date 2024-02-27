import { useMapEvents } from 'react-leaflet/hooks';
import PropTypes from 'prop-types';

function MyMapComponent({onLatLngClick, getZoomLevel}) {
    const map = useMapEvents({
        click: (e) => {
            getZoomLevel(map.getZoom());
            onLatLngClick(e.latlng);
        },
        locationfound: (e) => {
            console.log('location found:', e)
            map.flyTo(e.latlng, map.getZoom());
        },
    })
    return null
}

MyMapComponent.propTypes = {
    onLatLngClick: PropTypes.func.isRequired,
    getZoomLevel: PropTypes.func.isRequired
}

export default MyMapComponent;