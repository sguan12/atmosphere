import React, {Component} from 'react';
import './Button.css';

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
    }

    render() {
        return (
            <button type="button" id="units" onClick={() => this.toggle()}>{changeunits(this.state.bool)}</button>
        );
    }
}


export default Button;