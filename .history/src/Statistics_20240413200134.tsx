import { createSignal, createEffect } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import { window, setWindow, page, setPage } from "./App";

import { getClient, ResponseType, Body } from '@tauri-apps/api/http';



const [temp, setTemp] = createSignal("")
const [heart, setHeart] = createSignal("")
const [step, setStep] = createSignal("")

async function tick() {
    const client = await getClient();
    const response = await client.request({
        method: 'GET',
        url: 'http://api.heclouds.com/devices/1052529105/datastreams',
        headers: { 'api-key': '=2hXKxDoHTs1Hcd2IxI1HvWkd1c=' },
        responseType: ResponseType.JSON
    });

    setTemp(s => response.data.data[0].current_value);
    setHeart(s => response.data.data[1].current_value);
    setStep(s => response.data.data[2].current_value);
}

function Statistics() {

    tick();
    
    createEffect(() => {
        const interval = setInterval(tick, 10000)
        return () => clearInterval(interval)
    })

    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">运动实时信息</h1>
                <div class="stats bg-base-100 rounded-box shadow col-span-4">
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">平均运动心率</div>
                        <div class="stat-value text-primary">{heart()}次</div>
                        <div class="stat-desc">每分钟</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div class="stat-title">当前运动体温</div>
                        <div class="stat-value text-secondary">{temp()}°C</div>
                        <div class="stat-desc">正常</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="stat-title">步数</div>
                        <div class="stat-value text-accent">{step()}步</div>
                        <div class="stat-desc">今日累计</div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default Statistics;