import React, {Component} from 'react';
import {useContext} from 'react';
import './Button.css';
import Api from './Api.js';
import AppContext from './AppContext.js';


function changeunits(bool) {
    if (bool) {
        return "switch to metric";
    }
    else {
        return "switch to imperial";
    }
}

class Button extends Component {
    constructor() {
        super()
        this.state = {
            bool: true
        }
    }

    toggle() {
        this.setState(prevState => ({
            bool: !prevState.bool
        }))
        return(this.state);
    }

    render() {
        return (
            <AppContext.Consumer>
                {value => { return (
                        <button type="button" id="units" onClick={() => value.changeUnits(this.toggle(), value.units, value.city)}>{changeunits(this.state.bool)}</button>
                    );}
                }
            </AppContext.Consumer>
        );
    }
}


// function changeunits(bool) {
//     if (bool) {
//         return "switch to metric";
//     }
//     else {
//         return "switch to imperial";
//     }
// }

// class Button extends Component {
//     constructor() {
//         super()
//         this.state = {
//             bool: true
//         }
//     }

//     toggle() {
//         this.setState(prevState => ({
//             bool: !prevState.bool
//         }))
//     }

//     render() {
//         return (
//             <button type="button" id="units" onClick={() => this.toggle()}>{changeunits(this.state.bool)}</button>
//         );
//     }
// }


export default Button;