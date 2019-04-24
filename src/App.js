import React from 'react';
import MainMap from './components/MainMap'
import MarkersManager from './components/MarkersManager'
import MarkersList from './components/MarkersList'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            markers: [
                {'lat': -34.397, 'lng': 150.644, 'name': 'City 1', 'address': '', 'uid': '1'},
                {'lat': -34.352, 'lng': 150.677, 'name': 'City 2', 'address': '', 'uid': '2'}
            ],
            isFormActive: false,
            formData: null
        };

        this.handleMarkerSave = this.handleMarkerSave.bind(this);
        this.handleMarkerDelete = this.handleMarkerDelete.bind(this);
        this.handleMarkerOpen   = this.handleMarkerOpen.bind(this);
    }

    handleMarkerSave(marker) {
        console.log(marker);

        this.setState((state, props) => ({
            formData: null
        }));
    }

    handleMarkerDelete(markerIndex) {
        this.setState((state, props) => ({
            markers: this.state.markers.filter((item, index) => index !== markerIndex)
        }));
    }

    markerUpdate(markerIndex, newData) {
        let updatedMarkers = this.state.markers.map((item, i) => {
            if (i !== markerIndex) {
                return item;
            }

            return newData;
        });

        this.setState((state, props) => ({
            markers: updatedMarkers
        }));
    }

    markerCreate(marker) {
        this.setState((state, props) => ({
            markers: [...state.markers, marker],
            isFormActive: false
        }));
    }

    handleMarkerOpen(markerIndex) {
        this.setState((state, props) => ({
            formData: state.markers[markerIndex],
            isFormActive: true
        }));
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MainMap markers={this.state.markers}/>
                    </div>
                    <div className="col">
                        <MarkersManager formActive={this.state.isFormActive} formData={this.state.formData}
                                        saveCallback={this.handleMarkerSave}/>
                        <MarkersList openCallback={this.handleMarkerOpen} deleteCallback={this.handleMarkerDelete}
                                     markers={this.state.markers}/>
                    </div>
                </div>
            </div>
        );

    }

}

export default App;
