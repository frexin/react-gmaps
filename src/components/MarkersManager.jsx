import React from 'react';
import MarkerForm from './MarkerForm'


class MarkersManager extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isFormActive: props.formActive
        };

        this.handleAddButton = this.handleAddButton.bind(this);
    }

    handleAddButton() {
        this.setState((state, props) => ({
            isFormActive: !state.isFormActive
        }));
    }

    render() {

        return (
            <div id="marker-manager">
                <button type="button" onClick={this.handleAddButton} className="btn btn-primary btn-lg">Add marker</button>
                <hr/>

                <MarkerForm createCallback={this.props.createCallback} isOpen={this.state.isFormActive}/>
            </div>
        )
    }

    static defaultProps = {
        formActive: false
    }
}

export default MarkersManager