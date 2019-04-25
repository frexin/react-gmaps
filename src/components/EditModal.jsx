import ReactModal from 'react-modal'
import React from 'react';

import MarkerForm from './MarkerForm'

class EditModal extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            open: props.open
        };

        ReactModal.setAppElement('#root');


        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ open: true });
    }

    handleCloseModal () {
        this.props.clearCallback();
        this.setState({ open: false });
    }


    componentWillReceiveProps(nextProps, nextContext) {
        this.setState((state, props) => ({
            open: props.open
        }));
    }

    render() {

        return (
            <div>
                <ReactModal
                    isOpen={this.state.open}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="Modal__Bootstrap modal-dialog"
                    bodyOpenClassName="modal-open"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit marker</h4>
                            <button type="button" className="close" onClick={this.handleCloseModal}>
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <MarkerForm saveCallback={this.props.saveCallback} formData={this.props.formData}
                                        isOpen={true} />
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

export default EditModal
