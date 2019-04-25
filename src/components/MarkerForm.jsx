import React from 'react';
import Geocode from 'react-geocode';

class MarkerForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getDefaultData();

        Geocode.setApiKey("AIzaSyAL3U6qoZFG-zRPHk2kd2Icr7U0lDeVgFE");

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

    getDefaultData() {
        return {
            lat: '', lng: '', name: '', address: '', uid: ''
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.formData === null) {
            this.setState(() => this.getDefaultData());
        }
        else {
            this.setState(() => nextProps.formData);
        }
    }

    componentDidMount() {
        this.setState(() => this.props.formData);
    }

    handleFormSubmit(event) {
        let elements = event.target.elements;

        let lat = parseFloat(elements.lat.value);
        let lng = parseFloat(elements.lng.value);

        this.setState({
            name: elements.name.value, lat: lat, lng: lng, address: elements.address.value, uid: elements.uid.value
        }, () => {
            this.props.saveCallback(this.state);
        });

        event.preventDefault();
        event.target.reset();
    }

    getClassName() {
        let hide = this.props.isOpen ? '' : ' d-none';
        let name = "marker-form" + hide;

        return name;
    }

    render() {

        return (
            <div className={this.getClassName()}>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" defaultValue={this.state.name} name="name" id="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="addressName">Address</label>
                        <input type="text" onBlur={this.handleAddressComplete} className="form-control" name="address"
                               id="addressName"
                               defaultValue={this.state.address} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" className="form-control" name="lat" id="latitude" defaultValue={this.state.lat}
                                    />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" className="form-control" name="lng" id="longitude" defaultValue={this.state.lng}
                                   />
                        </div>
                    </div>

                    <input type="hidden" name="uid" defaultValue={this.state.uid}  />
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
