import { createSignal, createEffect, For } from "solid-js";

import { window, setWindow, page, setPage } from "./App";

function Leaderboard() {
    type Employees = {
        EmpID: string;
        Name: string;
        Gender: string;
        Age: string;
        Phone: string;
        Email: string;
        AttendanceID: string;
    };

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
                <h1 class="text-2xl font-bold my-2">工作排名</h1>
                <div class="py-24 sm:py-32 p-8 bg-base-100 rounded-box shadow">
                    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div class="max-w-2xl">
                            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">本月最佳员工</h2>
                            <p class="mt-6 text-lg leading-8">爱岗敬业、争创一流、艰苦奋斗、勇于创新、淡泊名利、甘于奉献、执着专注、精益求精、一丝不苟、追求卓越。</p>
                        </div>
                        <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                            <For each={ExcellentEmployees}>
                                {(Employees, index) => {
                                    return <li>
                                        <div class="flex items-center gap-x-6">
                                            <div class="avatar placeholder">
                                                <span class="z-40 absolute indicator-item badge badge-secondary">优秀</span>
                                                <div class="bg-accent-focus text-neutral-content mask mask-hexagon w-16">
                                                    <span class="text-1xl">第{index() + 1}名</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-semibold leading-7 tracking-tight">{Employees.Name}</h3>
                                                <p class="text-sm font-semibold leading-6 text-primary ">本月工作总时长:{Employees.AttendanceID}h</p>
                                            </div>
                                        </div>
                                    </li>;
                                }}
                            </For>;
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Leaderboard;