import { createSignal, createEffect } from "solid-js";
import logo from "./assets/logo.svg";
//import "./App.css";

import Login from "./Login";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import Leaderboard from "./Leaderboard";

function App() {
    return (
        <>
            <Navbar />
            <div class="divider"></div>
            <Statistics />
            <div class="divider"></div>
            <Leaderboard />
            <div class="divider"></div>
        </>
    );
}

export default App;
