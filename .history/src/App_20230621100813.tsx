import { createSignal, createEffect } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
//import "./App.css";

import Statistics from "./Statistics";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
    }
    return (
        <>
            <Navbar />
            <Statistics />
            <div class="divider"></div>
        </>
    );
}

export default App;
