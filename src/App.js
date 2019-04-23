import React from 'react';
import MainMap from './components/MainMap'
import MarkersManager from './components/MarkersManager'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            markers: [
                {'lat': -34.397, 'lng': 150.644},
                {'lat': -34.352, 'lng': 150.677}
            ],
            isFormActive: false
        };

        this.handleMarkerCreate = this.handleMarkerCreate.bind(this);
    }

    handleMarkerCreate(marker) {
        this.setState((state, props) => ({
            markers: [...state.markers, marker],
            isFormActive: false
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
                    </div>
                </div>
            </div>
        );

    }

}

export default App;
