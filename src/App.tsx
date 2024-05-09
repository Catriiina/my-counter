import React from 'react';
import './App.css';
import {FirstCounter} from "./FirstCounter/FirstCounter";
import {CounterSettings} from "./FirstCounter/CounterSettings";

function App() {
    return (
        <div className="App">
            <CounterSettings/>
            <FirstCounter/>
        </div>
    );
}

export default App;
