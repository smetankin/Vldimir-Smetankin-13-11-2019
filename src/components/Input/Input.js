import React, { Component } from 'react';

import {autocompleateSearch} from '../../api/weather';
import './input.css'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


class Input extends Component {
    state = {
        citiesAutocompleteList: [],
    };

    citiesAutocompleteRequestTimeout = null;

    handleInputChange = (e) => {
        if (!this.citiesAutocompleteRequestTimeout) {
            this.citiesAutocompleteRequestTimeout = setTimeout(() => this.citiesAutocompleteRequestTimeout = null, 1000)
            autocompleateSearch(e.target.value)
                .then(((data) => {
                    data && this.setState({ citiesAutocompleteList: data.map(i => ({ cityName: i.LocalizedName, cityKey: i.Key })) });
                } ))
        }
    };

    render() {
        return(

                <Autocomplete className={'main-input'}
                    options={this.state.citiesAutocompleteList}
                    getOptionLabel={option => option.cityName}
                    onChange={(e, value) => {
                        if (value.cityName) {
                            this.props.getWeather(value.cityName)
                        }
                    }}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} onChange={this.handleInputChange} label="City" variant="outlined" fullWidth name={'city'} />
                    )}
                />

        );
    }


}
export default Input;
