import { createSignal, createEffect } from "solid-js";

import { window, setWindow, page, setPage } from "./App";
import About from "./About";
import Settings from "./Settings";

function Navbar() {
    const [current, setCurrent] = createSignal("统计");

    const [days, setDays] = createSignal(0)
    const [hours, setHours] = createSignal(0)
    const [mins, setMins] = createSignal(0)
    const [secs, setSecs] = createSignal(0)

    function tick() {
        setSecs(s => s + 1)
        if (secs() === 59) {
            setSecs(s => 0)
            setMins(m => m + 1)
            if (mins() === 59) {
                setMins(m => 0)
                setHours(h => h + 1)
                if (hours() === 23) {
                    setHours(h => 0)
                    setDays(d => d + 1)
                }
            }
        }
    }

    createEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => clearInterval(interval)
    })

    return (
        <>
            <div class="navbar bg-base-100 mb-5 z-50">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        <li onClick={() => setWindow("登录")}><a>登出</a></li>
                        <li onClick="my_modal_settings.showModal()"><a>设置</a></li>
                        <dialog id="my_modal_settings" class="modal">
                            <form method="dialog" class="modal-box w-11/12 max-w-5xl">
                                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                <h3 class="font-bold text-lg">设置</h3>
                                <p class="py-4">Click the button below to close</p>
                                <Settings />
                            </form>
                        </dialog>
                        <li onClick="my_modal_about.showModal()"><a>关于</a></li>
                        <dialog id="my_modal_about" class="modal">
                            <form method="dialog" class="modal-box w-11/12 max-w-5xl">
                                <h3 class="font-bold text-lg">关于</h3>
                                <p class="py-4">lichi3030213313</p>
                                <About />
                                <div class="modal-action">
                                    <button class="btn">了解更多</button>
                                    <button class="btn">关闭</button>
                                </div>
                            </form>
                        </dialog>
                    </ul>
                </div>
                <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-xl">人员考勤系统</a>
                </div>
                <div class="tabs tabs-boxed bg-base-200">
                    <a class={current() === "请假" ? "tab tab-active" : "tab"} onClick={() => { setCurrent("请假"); setPage("请假"); }}>请假</a>
                    <a class={current() === "加班" ? "tab tab-active" : "tab"} onClick={() => { setCurrent("加班"); setPage("加班"); }}>加班</a>
                    <a class={current() === "出差" ? "tab tab-active" : "tab"} onClick={() => { setCurrent("出差"); setPage("出差"); }}>出差</a>
                    <a class={current() === "统计" ? "tab tab-active" : "tab"} onClick={() => { setCurrent("统计"); setPage("统计"); }}>统计</a>
                </div>
                <div class="flex-none">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <span class="loading loading-ring loading-md"></span>
                                <span class="badge badge-sm indicator-item">
                                    {days() * 12 * 60 * 60 + hours() * 60 * 60 + mins() * 60 + secs()}S
                                </span>
                            </div>
                        </label>
                        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow z-50">
                            <div class="card-body">
                                <span class="font-bold text-lg">累计上班时长:</span>
                                <span class="text-info">
                                    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">

                                        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                            <span class="countdown font-mono text-2xl">
                                                <span style={`--value: ${hours()}`}></span>
                                            </span>
                                            时
                                        </div>
                                        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                            <span class="countdown font-mono text-2xl">
                                                <span style={`--value: ${mins()}`}></span>
                                            </span>
                                            分
                                        </div>
                                        <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                            <span class="countdown font-mono text-2xl">
                                                <span style={`--value: ${secs()}`}></span>
                                            </span>
                                            秒
                                        </div>

                                    </div>
                                </span>
                                <div class="card-actions">
                                    <button class="btn btn-primary btn-block" onclick={() => setWindow("下班")}>立即下班</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown dropdown-end z-50">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <div class="indicator rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span class="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li onclick={() => setPage("审批通知")}>
                                <a class="justify-between">
                                    审批通知
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li onclick={() => { setPage("个人信息"); setCurrent("空选"); }}><a>个人信息</a></li>
                            <li onclick={() => { setPage("工作排名"); setCurrent("空选"); }}><a>工作排名</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Navbar;
