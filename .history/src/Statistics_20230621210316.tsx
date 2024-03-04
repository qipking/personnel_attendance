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
            <div class=" text-base-content shadow">
                <h1>Welcome to Tauri!</h1>

                <p>Click on the Tauri, Vite, and Solid logos to learn more.</p>

                <form
                    class="row"
                    onSubmit={(e) => {
                        e.preventDefault();
                        greet();
                    }}
                >
                    <input
                        id="greet-input"
                        onChange={(e) => setName(e.currentTarget.value)}
                        placeholder="Enter a name..."
                    />
                    <button class="btn btn-primary btn-block">Greet</button>
                </form>

                <p>{greetMsg()}</p>
            </div>
        </>
    );
}

export default Statistics;