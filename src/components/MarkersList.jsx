import React from 'react';
import MarkerItem from './MarkerItem'

class MarkersList extends React.Component {

    render() {

        return (
            <div className="markers-list">
                <div className="row">
                    {this.props.markers.map((marker, index) => (
                        <MarkerItem key={index.toString()} openCallback={this.props.openCallback}
                                    deleteCallback={this.props.deleteCallback} clickCallback={this.props.clickCallback}
                                    index={index} {...marker} />
                    ))}
                </div>
            </div>
            )
    }

}

export default MarkersList
