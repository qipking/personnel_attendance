/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.css";
import App from "./App";
import { onMount } from 'solid-js'
import { themeChange } from 'theme-change'
onMount(async () => {
    themeChange();
})


render(() => <App />, document.getElementById("root") as HTMLElement);
