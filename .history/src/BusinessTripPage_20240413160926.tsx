import { createSignal, createEffect, For } from "solid-js";

function BusinessTripPage() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">历史运动监测数据</h1>
                <div class="overflow-x-auto table-md rounded-box shadow max-h-96">
                    <table class="table table-xs table-pin-rows table-pin-cols bg-base-100">
                        <thead>
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
                            <tr>
                                <th></th>
                                <td>运动开始时间</td>
                                <td>运动结束时间</td>
                                <td>运动耗时</td>
                                <td>平均心率</td>
                                <td>平均体温</td>
                                <td>运动步数</td>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                                <th>1</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td>Purple</td>
                                <th>2</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BusinessTripPage;