import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps"

class MainMap extends React.Component {

    getGoogleMapContainer() {

        return withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
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
            <div className={"gmap_cointainer"}>
                <GmapContainer
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }

}

export default MainMap;
