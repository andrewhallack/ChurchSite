import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";

function Map() {
    return (
        <GoogleMap
            defaultZoom={1000}
            defaultCenter={{lat: 29.688933006815283, lng: -95.62746743018813}}
        >
            <Marker position={{lat: 29.688874482614427, lng: -95.6274545074987}} />
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const ContactUs = () => {
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap 
                googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAVO3UshJbPS0hyu9nSefyex79cMkR1h1M'}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
    )
}

export default ContactUs
