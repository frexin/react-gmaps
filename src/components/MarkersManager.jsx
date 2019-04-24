import React from 'react';
import MarkerForm from './MarkerForm'
import EditModal from './EditModal'


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

                <EditModal saveCallback={this.props.saveCallback} clearCallback={this.props.clearCallback} formData={this.state.formData}
                           open={this.props.formData !== null} />
                <MarkerForm saveCallback={this.props.saveCallback} formData={this.props.formData}
                            isOpen={this.state.isFormActive}/>
            </div>
        )
    }

    static defaultProps = {
        formActive: false
    }
}

export default MarkersManager
