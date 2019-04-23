import React from 'react';
import MainMap from './components/MainMap'
import MarkersManager from './components/MarkersManager'
import MarkersList from './components/MarkersList'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            markers: [
                {'lat': -34.397, 'lng': 150.644, 'name': 'City 1', 'address': ''},
                {'lat': -34.352, 'lng': 150.677, 'name': 'City 2', 'address': ''}
            ],
            isFormActive: false
        };

        this.handleMarkerCreate = this.handleMarkerCreate.bind(this);
        this.handleMarkerDelete = this.handleMarkerDelete.bind(this);
    }

    handleMarkerCreate(marker) {
        console.log(marker);

        this.setState((state, props) => ({
            markers: [...state.markers, marker],
            isFormActive: false
        }));
    }

    handleMarkerDelete(markerIndex) {
        this.setState((state, props) => ({
            markers: this.state.markers.filter((item, index) => index !== markerIndex)
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
                        <MarkersManager formActive={this.state.isFormActive} createCallback={this.handleMarkerCreate}  />
                        <MarkersList deleteCallback={this.handleMarkerDelete} markers={this.state.markers} />
                    </div>
                </div>
            </div>
        );

    }

}

export default App;
