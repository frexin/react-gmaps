import React from 'react';

class MarkerItem extends React.Component {

    render() {

        return (
            <div className="col">
                <h4 className="text-primary">
                    <a href="# " onClick={() => this.props.clickCallback(this.props.index)}>{this.props.name}</a>
                </h4>
                <p className="addrName">{this.props.address}</p>
                <p><b>Long:</b> <span className="lng">{this.props.lng}</span><br/>
                    <b>Lat:</b> <span className="lat">{this.props.lat}</span></p>

                <div className="btn-group" role="group">
                    <button type="button" onClick={() => this.props.deleteCallback(this.props.id)}
                            className="btn btn-danger">Delete</button>
                    <button type="button" onClick={() => this.props.openCallback(this.props.index)}
                            className="btn btn-primary">Edit</button>
                </div>
            </div>
        )
    }

}

export default MarkerItem
