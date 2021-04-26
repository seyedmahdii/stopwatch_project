import React from "react";

function Time({ title, value }) {
    return (
        <div className="time">
            <div className="time-value">{value < 10 ? `0${value}` : value}</div>
            <span className="time-title">{title}</span>
        </div>
    );
}

export default Time;
