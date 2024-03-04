import { createSignal, createEffect } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import { window, setWindow, page, setPage } from "./App";

function Statistics() {
    return (
        <>
            <h1>统计</h1>
        </>
    );
}

export default Statistics;