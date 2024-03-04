import { createSignal, createEffect } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import { window, setWindow, page, setPage } from "./App";

function Statistics() {


    const [greetMsg, setGreetMsg] = createSignal("");
    const [name, setName] = createSignal("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name: name() }));
    }
    return (
        <>
            <h1>统计</h1>
        </>
    );
}

export default Statistics;