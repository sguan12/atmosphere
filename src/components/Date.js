import React from 'react';

function DisplayDate(props) {
    // spelled out months for generating date
    const months = ["january", "february", "march", "april", "may", "june", "july", "august",
                    "september", "october", "november", "december"];

    return (
        <p className="date">{months[new Date().getMonth()] + " " + (new Date().getDate() + parseInt(props.offset))}</p>
    );
}

export default DisplayDate;