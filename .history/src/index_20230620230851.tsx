/* @refresh reload */
import { render } from "solid-js/web";

import "./styles.css";
import App from "./App";
import Login from "./Login";

function Index() {

    return (
        <>
            <Login />
        </>
    );
}

render(() => <Index />, document.getElementById("root") as HTMLElement);
