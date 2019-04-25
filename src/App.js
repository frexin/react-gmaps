import React from 'react';
import API from './Api'

import MainMap from './components/MainMap'
import MarkersManager from './components/MarkersManager'
import MarkersList from './components/MarkersList'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mapCenter: {lat: -3.745, lng: -38.523},
            markers: [],
            isFormActive: false,
            formData: null
        };

        API.get('/markers').then(res => {
            const markers = res.data;

            this.setState((res) => ({
                markers: markers
            }));
        });

        this.lastMarkerIndex = null;

        this.handleMarkerSave   = this.handleMarkerSave.bind(this);
        this.handleMarkerDelete = this.handleMarkerDelete.bind(this);
        this.handleMarkerOpen   = this.handleMarkerOpen.bind(this);
        this.handleFormClear    = this.handleFormClear.bind(this);
        this.handleMarkerClick  = this.handleMarkerClick.bind(this);
    }

    handleMarkerSave(marker) {
        if (marker.id) {
            this.markerUpdate(this.lastMarkerIndex, marker);
        }
        else {
            this.markerCreate(marker);
        }
    }

    handleFormClear() {
        this.setState(() => ({
            formData: null
        }));
    }

    handleMarkerDelete(markerId) {
        API.delete('/markers/' + markerId).then(res => {
            this.setState((state, props) => ({
                markers: this.state.markers.filter((item) => item.id !== markerId)
            }));
        });
    }

    handleMarkerClick(index) {
        const selectedMarker = this.state.markers[index];

        this.setState((state) => ({
            mapCenter: {lat: selectedMarker.lat, lng: selectedMarker.lng}
        }));
    }

    markerUpdate(markerIndex, newData) {
        let updatedMarkers = this.state.markers.map((item, i) => {
            if (i !== markerIndex) {
                return item;
            }

            return newData;
        });

        API.put('/markers/' + newData.id, newData).then(res => {
            this.setState((state, props) => ({
                markers: updatedMarkers,
                formData: null
            }));
        });
    }

    markerCreate(marker) {
        API.post('/markers', marker).then(res => {
            marker.id = res.data.id;

            this.setState((state, props) => ({
                markers: [...state.markers, marker],
                isFormActive: false,
                formData: null
            }));
        });
    }

    handleMarkerOpen(markerIndex) {
        this.lastMarkerIndex = markerIndex;

        this.setState((state, props) => ({
            formData: state.markers[markerIndex],
        }));
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MainMap mapCenter={this.state.mapCenter} markers={this.state.markers}/>
                    </div>
                    <div className="col">
                        <MarkersManager formActive={this.state.isFormActive} formData={this.state.formData}
                                        saveCallback={this.handleMarkerSave} clearCallback={this.handleFormClear}  />
                        <MarkersList openCallback={this.handleMarkerOpen} deleteCallback={this.handleMarkerDelete}
                                     markers={this.state.markers} clickCallback={this.handleMarkerClick} />
                    </div>
                </div>
            </div>
        );

    }

}

export default App;
