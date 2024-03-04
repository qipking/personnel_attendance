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
            <Switch fallback={<Login />}>
                <Match when={window() === "设置"}>
                    <Login />
                </Match>
                <Match when={window() === "关于"}>
                    <Login />
                </Match>
                <Match when={window() === "首页"}>
                    <Navbar />
                    <Switch fallback={<Statistics />}>
                        <Match when={page() === "请假"}>
                            <p>{x()} is greater than 10</p>
                        </Match>
                        <Match when={page() === "加班"}>
                            <p>{x()} is greater than 10</p>
                        </Match>
                        <Match when={page() === "出差"}>
                            <p>{x()} is greater than 10</p>
                        </Match>
                        <Match when={page() === "审批通知"}>
                            <p>{x()} is greater than 10</p>
                        </Match>
                        <Match when={page() === "个人信息"}>
                            <p>{x()} is greater than 10</p>
                        </Match>
                        <Match when={page() === "工作排名"}>
                            <Leaderboard />
                        </Match>
                    </Switch>
                </Match>
            </Switch>

        </>
    );
}

export default App;
