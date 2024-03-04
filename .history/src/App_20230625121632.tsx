import { createSignal, createEffect, Show, Switch, Match } from "solid-js";
import logo from "./assets/logo.svg";
//import "./App.css";

import Login from "./Login";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import Leaderboard from "./Leaderboard";
import Registration from "./Registration";
import Approval from "./Approval";
import BusinessTripPage from "./BusinessTripPage";
import OverTimePage from "./OverTimePage";
import LeavePage from "./LeavePage";
import { connectDB } from "./msSQL";

export const [window, setWindow] = createSignal("登录");
export const [page, setPage] = createSignal("统计");
export const [theme, setTheme] = createSignal("light");

function App() {
    const sql = require('mssql')

    async () => {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect('Server=localhost,1433;Database=work;User Id=lichi;Password=1313113')
            const result = await sql.query`SELECT * from User`
            console.dir(result)
        } catch (err) {
            // ... error checks
        }
    }
    return (
        <div data-theme={theme()} class="absolute bg-cover bg-center bg-base-200 min-w-full min-h-full">
            <div>

                <Switch fallback={<Login />}>
                    <Match when={window() === "首页"}>
                        <Navbar />
                        <Switch fallback={<Statistics />}>
                            <Match when={page() === "请假"}>
                                <LeavePage />
                            </Match>
                            <Match when={page() === "加班"}>
                                <OverTimePage />
                            </Match>
                            <Match when={page() === "出差"}>
                                <BusinessTripPage />
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
        </div>
    );
}

export default App;
