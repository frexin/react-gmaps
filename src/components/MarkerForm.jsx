import React from 'react';

class MarkerForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            lng: null,
            name: null
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        this.setState({
           lat: event.target.elements.lat.value,
           lng: event.target.elements.lng.value,
           name: event.target.elements.name.value,
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
                        <label htmlFor="addressName">Address name</label>
                        <input type="text" className="form-control" name="name" id="addressName" placeholder="Berlin"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="latitude">Latitude</label>
                            <input type="text" className="form-control" name="lat" id="latitude" placeholder="52.520007"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="longitude">Longitude</label>
                            <input type="text" className="form-control" name="lng" id="longitude" placeholder="13.404954"/>
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