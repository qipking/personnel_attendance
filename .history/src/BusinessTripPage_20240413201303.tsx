import { M } from "drizzle-orm/query-promise.d-2e42fbc9";
import { createSignal, createEffect, For } from "solid-js";

import { getClient, ResponseType, Body } from '@tauri-apps/api/http';

async function getHistoricalMotion() {

    const client = await getClient();
    const heartRate = await client.request({
        method: 'GET',
        url: 'http://api.heclouds.com/devices/1052529105/datastreams?datastream_id=heart&heart=2024-01-01T00:00:00&limit=20',
        headers: { 'api-key': '=2hXKxDoHTs1Hcd2IxI1HvWkd1c=' },
        responseType: ResponseType.JSON
    });
    const temperature = await client.request({
        method: 'GET',
        url: 'http://api.heclouds.com/devices/1052529105/datastreams?datastream_id=temp&start=2024-01-01T00:00:00&limit=20',
        headers: { 'api-key': '=2hXKxDoHTs1Hcd2IxI1HvWkd1c=' },
        responseType: ResponseType.JSON
    });
    const steps = await client.request({
        method: 'GET',
        url: 'http://api.heclouds.com/devices/1052529105/datastreams?datastream_id=step&start=2024-01-01T00:00:00&limit=20',
        headers: { 'api-key': '=2hXKxDoHTs1Hcd2IxI1HvWkd1c=' },
        responseType: ResponseType.JSON
    });


    for (let i = 0; i < temperature.data.data.length; i++) {
        HistoricalMotion.push({
            motionTime: temperature.data.data[i].update_at,
            heartRate: heartRate.data.data[i].current_value,
            temperature: temperature.data.data[i].current_value,
            steps: steps.data.data[i].current_value
        });
    }


}

function BusinessTripPage() {
    const HistoricalMotion:[] = [];
    getHistoricalMotion();
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">历史运动监测数据</h1>
                <div class="overflow-x-auto table-md rounded-box shadow max-h-96">
                    <table class="table table-xs table-pin-rows table-pin-cols bg-base-100">
                        <thead>
                            <tr>
                                <th></th>
                                <td>运动时间</td>
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
                                        <th>{index() + 1}</th>
                                        <td>{motionData.motionTime}</td>
                                        <td>{motionData.heartRate}</td>
                                        <td>{motionData.temperature}</td>
                                        <td>{motionData.steps}</td>
                                    </tr>
                                }}
                            </For>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BusinessTripPage;