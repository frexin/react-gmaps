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

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps', this.props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const lastMarker = this.props.markers[this.props.markers.length - 1];
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
                    center={{
                        lat: -3.745,
                        lng: -38.523
                    }}
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
