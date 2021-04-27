import React, { useState, useRef } from "react";

const AppContext = React.createContext("");

const AppProvider = ({ children }) => {
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
    const handleResetLap = () => {
        if (isActive) {
            console.log("object");
        } else {
            setMsecond(0);
            setSecond(0);
            setMin(0);
            setHour(0);
            setIsActive(!isActive);
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

    return (
        <AppContext.Provider
            value={{
                msecond,
                second,
                min,
                hour,
                isActive,
                countRef,
                setMsecond,
                setSecond,
                setMin,
                setHour,
                setIsActive,
                handleActive,
                handleResetLap,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
