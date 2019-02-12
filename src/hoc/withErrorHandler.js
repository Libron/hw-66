import React, {Component, Fragment} from 'react';
import Modal from "../components/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
    return class HOC extends Component {
        constructor(props) {
            super(props);

            this.state = {
                error: null
            };

            axios.interceptors.response.use(res => res, error => {
                this.setState({error});
                throw error;
            });

        };

        errorDismissed =() => {
            this.setState({error: null});
        };


        render() {
            return (
                <Fragment>
                    <Modal show={this.state.error} close={this.errorDismissed}>
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props} />;
                </Fragment>
            );
        }
    };
};

export default withErrorHandler;