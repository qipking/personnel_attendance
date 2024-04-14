import { M } from "drizzle-orm/query-promise.d-2e42fbc9";
import { createSignal, createEffect, For } from "solid-js";

function BusinessTripPage() {
    const HistoricalMotion = [{
        startTime: "2022-10-01 10:00:00",
        endTime: "2022-10-01 11:00:00",
        duration: "1:00:00",
        heartRate: "120",
        temperature: "36.5",
        steps: "5000"
    }]
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">历史运动监测数据</h1>
                <div class="overflow-x-auto table-md rounded-box shadow max-h-96">
                    <table class="table table-xs table-pin-rows table-pin-cols bg-base-100">
                        <thead>
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
                            <For each={HistoricalMotion}>
                                {(motionData, index) => {
                                    return <tr>
                                        <th>{motionData.startTime}</th>
                                        <td>{motionData.endTime}</td>
                                        <td>{motionData.duration}</td>
                                        <td>{motionData.heartRate}</td>
                                        <td>{motionData.temperature}</td>
                                        <td>{motionData.steps}</td>
                                    </tr>
                                }}
                            </For>
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