import React, {Component, Fragment} from 'react';
import axios from '../../axios-instance';

import './CountriesPanel.css';
import Spinner from "../../components/Spinner/Spinner";
import withLoader from "../../hoc/withErrorHandler";

class CountriesPanel extends Component {
    state = {
        countries: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/rest/v2/all?fields=name;alpha3Code').then(response => {
            this.setState({countries: response.data});
        }).finally(()=>{
            this.setState({loading: false});
        });
    };

    render() {
        if (this.state.loading) {
            return <Spinner />
        }

        return (
            <Fragment>
                <section className="CountriesPanel">
                    <ol>
                        {this.state.countries.map(country=>(
                            <li
                                key={country.alpha3Code}
                            >{country.name}</li>
                        ))}
                    </ol>
                </section>
            </Fragment>
        );
    }
}

export default withLoader(CountriesPanel, axios);