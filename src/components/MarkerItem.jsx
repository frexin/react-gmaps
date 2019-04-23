import React from 'react';

class MarkerItem extends React.Component {

    constructor(props) {
        super(props);

        // this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(one, two) {
        console.log(one, two);
    }

    render() {

        return (
            <div className="col">
                <h4 className="text-primary">{this.props.name}</h4>
                <p>{this.props.name}</p>
                <p>Longtitude: {this.props.lat}<br/>
                    Latitude: {this.props.lng}</p>

                <div className="btn-group" role="group">
                    <button type="button" onClick={(e) => this.props.deleteCallback(this.props.index)}
                            className="btn btn-danger">Delete</button>
                    <button type="button" className="btn btn-primary">Edit</button>
                </div>
            </div>
        )
    }

}

export default MarkerItem
