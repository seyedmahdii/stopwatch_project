import React, { useState, useRef } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";

function App() {
    let [msecond, setMsecond] = useState(0);
    let [second, setSecond] = useState(0);
    let [min, setMin] = useState(0);
    let [hour, setHour] = useState(0);
    let [isActive, setIsActive] = useState(false);
    let countRef = useRef(null);

    const handleActive = () => {
        setIsActive(!isActive);
        if (isActive) {
            clearInterval(countRef.current);
        } else {
            countRef.current = setInterval(() => {
                setMsecond((msecond) => {
                    return msecond + 1;
                });
            }, 10);
        }
    };

    if (msecond === 100) {
        setMsecond(0);
        setSecond((second) => {
            return second + 1;
        });
    }
    if (second === 60) {
        setSecond(0);
        setMin((min) => {
            return min + 1;
        });
    }
    if (min === 60) {
        setMin(0);
        setHour((hour) => {
            return hour + 1;
        });
    }

    const handleReset = () => {
        setMsecond(0);
        setSecond(0);
        setMin(0);
        setHour(0);
        setIsActive(false);
    };

    return (
        <div className="app">
            <h1>Stopwatch</h1>
            <div className="btns-container">
                <button type="button" onClick={handleActive}>
                    {isActive ? "Pause" : msecond ? "Resume" : "Start"}
                </button>
                <button type="button" onClick={handleReset}>
                    Reset
                </button>
            </div>

            <Timer msecond={msecond} second={second} min={min} hour={hour} />
        </div>
    );
}

export default App;
