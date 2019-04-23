import React from 'react';
import MainMap from './components/MainMap'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            markers: [
                {'lat': -34.397, 'lng': 150.644},
                {'lat': -34.352, 'lng': 150.677}
            ]
        }
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <MainMap markers={this.state.markers}/>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        );

    }

}

export default App;
