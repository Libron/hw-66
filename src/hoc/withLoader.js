import React, {Component, Fragment} from 'react';
import Backdrop from "../components/Backdrop/Backdrop";

const withLoader = (WrappedComponent, axios) => {
    return class WithSpinnerHOC extends Component {
        constructor(props) {
            super(props);

            const reqInterceptorId = axios.interceptors.request.use(req => {
                this.setState({loading: true});
                return req;
            });

            const resInterceptorId = axios.interceptors.response.use(res => {
                this.setState({loading: false});
                return res;
            }, err => {
                this.setState({loading: false});
                throw err;
            });

            this.state = {
                loading: false,
                reqInterceptorId,
                resInterceptorId
            }
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.state.reqInterceptorId);
            axios.interceptors.response.eject(this.state.resInterceptorId);
        }

        render() {
            return (
                <Fragment>
                    <Backdrop show={this.state.loading} loading />
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }
};

export default withLoader;