import React, { useContext } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import Buttons from "./components/Buttons/Buttons";
import { AppContext } from "./context";

function App() {
    const { msecond, second, min, hour } = useContext(AppContext);

    return (
        <div className="app">
            <h1>Stopwatch</h1>

            <Buttons />

            <Timer msecond={msecond} second={second} min={min} hour={hour} />
        </div>
    );
}

export default App;
