import { createSignal, createEffect, Show, Switch, Match } from "solid-js";
import logo from "./assets/logo.svg";
//import "./App.css";

import Login from "./Login";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import Leaderboard from "./Leaderboard";
import Registration from "./Registration";
import BusinessTripPage from "./BusinessTripPage";

export const [window, setWindow] = createSignal("登录");
export const [page, setPage] = createSignal("统计");
export const [theme, setTheme] = createSignal("light");

function App() {
    return (
        <div data-theme={theme()} class="absolute bg-cover bg-center bg-base-200 min-w-full min-h-full">
            <div>

                <Switch fallback={<Login />}>
                    <Match when={window() === "首页"}>
                        <Navbar />
                        <Switch fallback={<Statistics />}>】
                            <Match when={page() === "出差"}>
                                <BusinessTripPage />
                            </Match>】
                            <Match when={page() === "个人信息"}>
                                <Registration />
                            </Match>
                            <Match when={   () === "工作排名"}>
                                <Leaderboard />
                            </Match>
                        </Switch>
                    </Match>
                </Switch>

            </div>
        </div>
    );
}

export default App;
