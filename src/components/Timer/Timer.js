import React from "react";
import Time from "./Time";
import "./Timer.css";

function Timer({ hour, min, second, msecond }) {
    return (
        <div className="timer">
            <Time value={hour} title="hours" />
            <Time value={min} title="minutes" />
            <Time value={second} title="seconds" />
            <Time value={msecond} title="mseconds" />
        </div>
    );
}

export default Timer;
