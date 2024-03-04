import { createSignal, createEffect, Show, Switch, Match } from "solid-js";
import logo from "./assets/logo.svg";
//import "./App.css";

import Login from "./Login";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import Leaderboard from "./Leaderboard";
import Registration from "./Registration";
import Approval from "./Approval";
import Vacation from "./Trip";
import Overtime from "./Overtime";
import Leave from "./Leave";

import { onMount } from 'solid-js'
import { themeChange } from 'theme-change'
onMount(async () => {
    themeChange();
})

export const [window, setWindow] = createSignal("登录");
export const [page, setPage] = createSignal("统计");
function App() {
    return (
        <>
            <div data-theme="dark" class=" bg-base-200 w-full h-full">

                <Switch fallback={<Login />}>
                    <Match when={window() === "首页"}>
                        <Navbar />
                        <Switch fallback={<Statistics />}>
                            <Match when={page() === "请假"}>
                                <Leave />
                            </Match>
                            <Match when={page() === "加班"}>
                                <Overtime />
                            </Match>
                            <Match when={page() === "出差"}>
                                <Vacation />
                            </Match>
                            <Match when={page() === "审批通知"}>
                                <Approval />
                            </Match>
                            <Match when={page() === "个人信息"}>
                                <Registration />
                            </Match>
                            <Match when={page() === "工作排名"}>
                                <Leaderboard />
                            </Match>
                        </Switch>
                    </Match>
                </Switch>

            </div>
        </>
    );
}

export default App;
