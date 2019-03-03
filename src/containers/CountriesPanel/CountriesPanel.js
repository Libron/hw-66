import React, {Component, Fragment} from 'react';
import axios from '../../axios-instance';

import './CountriesPanel.css';
import withLoader from "../../hoc/withLoader";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

class CountriesPanel extends Component {
    state = {
        countries: []
    };

    componentDidMount() {
        axios.get('/rest/v2/all?fields=name;alpha3Code').then(response => {
            this.setState({countries: response.data});
        }).finally(()=>{
            this.setState({loading: false});
        });
    };

    render() {
        return (
            <Fragment>
                <section className="CountriesPanel">
                    <ol>
                        {this.state.countries.map(country=>(
                            <ErrorBoundary key={country.alpha3Code}>
                                <li>{country.name}</li>
                            </ErrorBoundary>
                        ))}
                    </ol>
                </section>
            </Fragment>
        );
    }
}

export default withLoader(CountriesPanel, axios);