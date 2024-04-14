import { createSignal, createEffect, For } from "solid-js";

import { window, setWindow, page, setPage } from "./App";
import { Employees } from "./Table";

function Leaderboard() {

    const ExcellentEmployees: Employees[] = [{
        EmpID: "001",
        Name: "张三",
        Gender: "女",
        Age: "35",
        Phone: "12345678901",
        Email: "a@b.c",
        AttendanceID: "1000"
    }, {
        EmpID: "002",
        Name: "李四",
        Gender: "男",
        Age: "36",
        Phone: "01234567890",
        Email: "b@c.d",
        AttendanceID: "200"
    }];

    ExcellentEmployees.push({
        EmpID: "003",
        Name: "王五",
        Gender: "男",
        Age: "24",
        Phone: "01234567890",
        Email: "b@c.d",
        AttendanceID: "30"
    });

    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">运动排行榜</h1>
                <div class="py-24 sm:py-32 p-8 bg-base-100 rounded-box shadow">
                    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div class="max-w-2xl">
                            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">最自律运动员</h2>
                            <p class="mt-6 text-lg leading-8">热爱运动，热爱生命。</p>
                        </div>
                        <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                            <For each={ExcellentEmployees}>
                                {(Employees, index) => {
                                    return <li>
                                        <div class="flex indicator items-center gap-x-6">
                                            <div class="avatar placeholder">
                                                <span class="indicator-item indicator-top badge badge-secondary">优秀</span>
                                                <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                                                    <span class="text-2xl">第{index() + 1}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-semibold leading-7 tracking-tight">{Employees.Name}</h3>
                                                <p class="text-sm font-semibold leading-6 text-primary ">本月运动总时长:{Employees.AttendanceID}小时</p>
                                            </div>
                                        </div>
                                    </li>
                                }}
                            </For>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Leaderboard;