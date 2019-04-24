import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

class MainMap extends React.Component {

    map = null;

    constructor(props) {
        super(props);
    }

    panMapToCoordinates(coords) {
        this.map.panTo(coords);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let lastMarker = this.props.markers[this.props.markers.length - 1];

        if (this.props.mapCenter !== prevProps.mapCenter) {
            lastMarker = this.props.mapCenter;
        }

        this.panMapToCoordinates(lastMarker);
    }

    render() {

        return (
            <LoadScript id="script-loader" googleMapsApiKey="AIzaSyAaE9Ofwn52HHf_6xyeHB_3rUY_Usb7YAs" {...this.props}>
                <GoogleMap
                    id='main-map'
                    zoom={8}
                    onLoad={map => {
                        this.map = map;
                    }}
                    mapContainerStyle={{
                        height: "400px",
                        width: "100%"
                    }}
                    center={this.props.mapCenter}
                >
                    {this.props.markers.map((marker, index) => (
                        <Marker key={index.toString()} position={marker} />
                    ))}
                </GoogleMap>
            </LoadScript>
        )
    }

}

export default MainMap;
