import React, { useContext } from "react";
import { AppContext } from "../../context";
import "./Buttons.css";

function Buttons() {
    const { handleActive, isActive, msecond, handleResetLap } = useContext(
        AppContext
    );

    return (
        <div className="buttons">
            <button type="button" onClick={handleActive}>
                {isActive ? "Pause" : msecond ? "Resume" : "Start"}
            </button>
            <button type="button" onClick={handleResetLap}>
                {isActive ? "Lap" : "Reset"}
            </button>
        </div>
    );
}

export default Buttons;
