import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 21.203615,
    lng: 72.824028,
};

const defaultOptions = {
    mapTypeControl: true,
    zoomControl: true,
    fullscreenControl: true,
};

const GoogleMapComponent = () => {
    return (
        <LoadScript googleMapsApiKey="">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                options={defaultOptions}
            >
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
