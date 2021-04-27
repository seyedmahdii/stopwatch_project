import React, { useContext } from "react";
import Time from "./Time";
import "./Timer.css";
import { AppContext } from "./../../context";

function Timer() {
    const { msecond, second, min, hour } = useContext(AppContext);

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
