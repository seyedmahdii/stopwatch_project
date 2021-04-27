import React, { useContext } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import Buttons from "./components/Buttons/Buttons";

import Laps from "./components/Laps/Laps";
import { AppContext } from "./context";

function App() {
    const { laps } = useContext(AppContext);

    return (
        <div className="app">
            <div>
                <h1>Stopwatch</h1>

                <Buttons />

                <Timer />
            </div>

            {laps.length !== 0 && <Laps />}
        </div>
    );
}

export default App;
