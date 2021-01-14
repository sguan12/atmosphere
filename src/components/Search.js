import React, {Component} from 'react';
import {useContext} from 'react';
import './Search.css';
import Api from './Api.js';
import AppContext from './AppContext.js';

class Search extends Component {
    
    keyPress(e) {
        if(e.keyCode == 13) {
            Api(e.target.value, "imperial");
            e.target.value = '';
        }
    }

    render() {
        return (
            <AppContext.Consumer>
                {value => {
                    return <input type="text"
                    id="search"
                    onKeyDown={e => value.changeCity(e, value.city, value.units)}
                    // onKeyDown={this.keyPress}
                    placeholder="search another city..."/>
                }}
            </AppContext.Consumer>
        );
    }
}

export default Search;