import React, { useState, useRef } from "react";

function App() {
    let [msecond, setMsecond] = useState(0);
    let [second, setSecond] = useState(0);
    let [min, setMin] = useState(0);
    let [hour, setHour] = useState(0);
    let countRef = useRef(null);

    const handleStart = () => {
        countRef.current = setInterval(() => {
            setMsecond((msecond) => {
                return msecond + 1;
            });
        }, 10);
    };

    if (msecond === 100) {
        setMsecond(0);
        setSecond((second) => {
            return second + 1;
        });
    }
    if (second == 60) {
        setSecond(0);
        setMin((min) => {
            return min + 1;
        });
    }
    if (min >= 60) {
        setMin(0);
        setHour((hour) => {
            return hour + 1;
        });
    }
    const timeFormat = (time) => {
        return time < 10 ? `0${time}` : time;
    };
    const handlePause = () => {
        clearInterval(countRef.current);
    };

    const handleResume = () => {};

    const handleReset = () => {};

    return (
        <div className="app">
            <h3>Stopwatch</h3>
            <div className="btns-container">
                <p>
                    <b>
                        {timeFormat(hour)}:{timeFormat(min)}:
                        {timeFormat(second)}:{timeFormat(msecond)}
                    </b>
                </p>
                <button type="button" onClick={handleStart}>
                    Start
                </button>
                <button type="button" onClick={handlePause}>
                    Pause
                </button>
                <button type="button" onClick={handleResume}>
                    Resume
                </button>
                <button type="button" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default App;
