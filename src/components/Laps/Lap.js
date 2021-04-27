import React, { useContext } from "react";
import { AppContext } from "../../context";

function Lap({ msecond, second, min, hour, row }) {
    const { numberFormat } = useContext(AppContext);

    return (
        <tr>
            <td>{numberFormat(row)}</td>
            <td>
                {numberFormat(hour)}:{numberFormat(min)}:{numberFormat(second)}:
                {numberFormat(msecond)}
            </td>
        </tr>
    );
}

export default Lap;
