import { createSignal, createEffect } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
//import "./App.css";

import Statistics from "./Statistics";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
    const [greetMsg, setGreetMsg] = createSignal("");
    const [name, setName] = createSignal("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name: name() }));
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
