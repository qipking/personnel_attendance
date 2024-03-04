import { createSignal, createEffect, Show, Switch, Match } from "solid-js";
import logo from "./assets/logo.svg";
//import "./App.css";

import Login from "./Login";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import Leaderboard from "./Leaderboard";


export const Windows = "界面";
const [window, setWindow] = createSignal("Windows");
const [page, setPage] = createSignal("页面");
function App() {
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
                            <Statistics />
                        </Match>
                        <Match when={page() === "加班"}>
                            <Statistics />
                        </Match>
                        <Match when={page() === "出差"}>
                            <Statistics />
                        </Match>
                        <Match when={page() === "审批通知"}>
                            <Statistics />
                        </Match>
                        <Match when={page() === "个人信息"}>
                            <Statistics />
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
