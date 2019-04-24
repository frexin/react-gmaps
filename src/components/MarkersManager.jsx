import React from 'react';
import MarkerForm from './MarkerForm'


class MarkersManager extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isFormActive: props.formActive,
            formData: props.formData
        };

        this.handleAddButton = this.handleAddButton.bind(this);
    }

    handleAddButton() {
        this.setState((state, props) => ({
            isFormActive: !state.isFormActive
        }));
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState((state, props) => ({
            isFormActive: props.formActive
        }));

        if (nextProps.hasOwnProperty('formData')) {
            this.setState(() => ({formData: nextProps.formData}));
        }
    }

    render() {

        return (
            <div id="marker-manager">
                <button type="button" onClick={this.handleAddButton} className="btn btn-primary btn-lg">Add marker</button>
                <hr/>

                <MarkerForm saveCallback={this.props.saveCallback} formData={this.state.formData}
                            isOpen={this.state.isFormActive}/>
            </div>
        )
    }

    static defaultProps = {
        formActive: false
    }
}

export default MarkersManager
