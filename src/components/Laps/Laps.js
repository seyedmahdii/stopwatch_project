import React, { useContext } from "react";
import "./Laps.css";
import Lap from "./Lap";
import { AppContext } from "../../context";

function Laps() {
    const { laps } = useContext(AppContext);

    return (
        <div className="laps">
            <table>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                </tr>
                {laps.map((lap, index) => {
                    return <Lap key={index} {...lap} row={index + 1} />;
                })}
            </table>
        </div>
    );
}

export default Laps;
