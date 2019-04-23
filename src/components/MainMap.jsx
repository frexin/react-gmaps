import React from 'react';
import {withGoogleMap, withHandlers, GoogleMap, Marker} from "react-google-maps"

class MainMap extends React.Component {

    constructor(props) {
        super(props);
    }


    panMapToCoordinates(coords) {
        this._map.setCenter(coords);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const lastMarker = nextProps.markers.pop();
        console.log(lastMarker);
        this.panMapToCoordinates(lastMarker);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps);
    }

    handleMapMounted = (map) => {
        this._map = map;
        console.log(this._map.getCenter() );
    };

    getGoogleMapContainer() {

        return withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                ref={props.onMapMounted}
                loadingElement={<div style={{ height: `100%` }} />}
                onMapMounted={this.handleMapMounted}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                defaultCenter={{ lat: -34.397, lng: 150.644 }} >

                {this.props.markers.map((marker, index) => (
                    <Marker key={index.toString()} position={marker} />
                ))}
            </GoogleMap>
        )
    }

    render() {

        const GmapContainer = this.getGoogleMapContainer();

        return (
            <GmapContainer
                loadingElement={<div style={{ height: `100%` }} />}
                onMapMounted={this.handleMapMounted}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }

}

export default MainMap;
