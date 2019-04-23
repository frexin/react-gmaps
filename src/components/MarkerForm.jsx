import React from 'react';
import Geocode from 'react-geocode';

class MarkerForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: '', lng: '', name: null, address: null
        };

        Geocode.setApiKey("AIzaSyAvoHHTrf1HzpqKiYpsr8HBT7y2P_xQMIQ");

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleAddressComplete = this.handleAddressComplete.bind(this);
    }

    handleAddressComplete(e) {
        const address = e.target.value;

        if (!address.length) {
            return false;
        }

        Geocode.fromAddress(address).then(
            response => {
                let {lat, lng} = response.results[0].geometry.location;
                this.setState({lat: lat, lng: lng});
            }
        );
    }

    handleFormSubmit(event) {
        let elements = event.target.elements;

        let lat = parseFloat(elements.lat.value);
        let lng = parseFloat(elements.lng.value);

        this.setState({
            name: elements.name.value, lat: lat, lng: lng, address: elements.address.value
        }, () => {
            this.props.createCallback(this.state);
        });

        event.preventDefault();
    }


    getClassName() {
        let hide = this.props.isOpen ? '' : ' d-none';
        let name = "marker-form" + hide;

        return name;
    }

    render() {

        return (
            <div className={this.getClassName()}>
                <h3>Adding new marker</h3>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="name" id="title" placeholder="Name of place"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressName">Address</label>
                        <input type="text" onBlur={this.handleAddressComplete} className="form-control" name="address"
                               id="addressName"
                               placeholder="Berlin"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" className="form-control" name="lat" id="latitude" defaultValue={this.state.lat}
                                   placeholder="52.520007"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" className="form-control" name="lng" id="longitude" defaultValue={this.state.lng}
                                   placeholder="13.404954"/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )

    }

    static defaultProps = {
        isOpen: false
    }

}

export default MarkerForm
