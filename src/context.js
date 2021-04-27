import React, { useState, useRef } from "react";

const AppContext = React.createContext("");

const AppProvider = ({ children }) => {
    let [msecond, setMsecond] = useState(0);
    let [second, setSecond] = useState(0);
    let [min, setMin] = useState(0);
    let [hour, setHour] = useState(0);
    let [isActive, setIsActive] = useState(false);
    let [laps, setLaps] = useState([]);
    let countRef = useRef(null);

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

    const handleResetLap = () => {
        if (isActive) {
            setLaps([...laps, { msecond, second, min, hour }]);
        } else {
            // Reset
            setMsecond(0);
            setSecond(0);
            setMin(0);
            setHour(0);
            setLaps([]);
            setIsActive(false);
        }
    };

    const numberFormat = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <AppContext.Provider
            value={{
                msecond,
                second,
                min,
                hour,
                isActive,
                countRef,
                laps,
                setMsecond,
                setSecond,
                setMin,
                setHour,
                setIsActive,
                handleActive,
                handleResetLap,
                setLaps,
                numberFormat,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
