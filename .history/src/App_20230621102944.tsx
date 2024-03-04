import { createSignal, createEffect, Show, Switch, Match } from "solid-js";
import logo from "./assets/logo.svg";
//import "./App.css";

import Login from "./Login";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import Leaderboard from "./Leaderboard";

function App() {
    const [window, setWindow] = createSignal("界面");
    const [page, setPage] = createSignal("页面");
    return (
        <>
            <Switch fallback={<></Login></>}>
                <Match when={x() > 10}>
                    <p>{x()} is greater than 10</p>
                </Match>
                <Match when={5 > x()}>
                    <Switch fallback={<p>{x()} is between 5 and 10</p>}>
                        <Match when={x() > 10}>
                            <p>{x()} is greater than 10</p>
                        </Match>
                        <Match when={5 > x()}>
                            <p>{x()} is less than 5</p>
                        </Match>
                    </Switch>
                </Match>
            </Switch>
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
