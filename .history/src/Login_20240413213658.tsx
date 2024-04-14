import { createSignal, createEffect, Switch, Match } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import { window, setWindow, page, setPage } from "./App";


const [password, setPassword] = createSignal("");
function Login() {
    return (
        <div class="bg-cover bg-center" style="background-image: url(https://api.xygeng.cn/openapi/bing/view);">
            <div class="hero backdrop-blur-sm min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <Switch fallback={<Login />}>
                        <Match when={window() === "登录"}>
                            <div class="text-center text-slate-200 lg:text-left">
                                <h1 class="text-5xl font-bold">登陆</h1>
                                <p class="py-6 text-3xl">健康运动每一天，快乐生活一辈子!</p>
                            </div>
                            <div class="card glass flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100/50">
                                <div class="card-body">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">账号</span>
                                        </label>
                                        <input type="text" placeholder="email" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">密码</span>
                                        </label>
                                        <input type="text" placeholder="password" class="input input-bordered"
                                            onChange={(e) => setPassword(e.currentTarget.value)} />
                                        <label class="label">
                                            <a href="#" class="label-text-alt link link-hover" onclick="my_modal_2.showModal()">忘记密码?</a>
                                            <dialog id="my_modal_2" class="modal">
                                                <form method="dialog" class="modal-box">
                                                    <h3 class="font-bold text-lg">抱歉!</h3>
                                                    <p class="py-4">请与管理人员联系重置密码</p>
                                                </form>
                                                <form method="dialog" class="modal-backdrop">
                                                    <button>close</button>
                                                </form>
                                            </dialog>
                                            <dialog id="my_modal_3" class="modal">
                                                <form method="dialog" class="modal-box">
                                                    <h3 class="font-bold text-lg">抱歉!</h3>
                                                    <p class="py-4">密码错误</p>
                                                </form>
                                                <form method="dialog" class="modal-backdrop">
                                                    <button>close</button>
                                                </form>
                                            </dialog>
                                        </label>
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary" onclick={() => {
                                            if (password() === "123456") {
                                                setWindow("上班")
                                            } else {
                                                my_modal_3.showModal()
                                            }

                                        }}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </Match>
                        <Match when={window() === "上班"}>
                            <div class="card card-side w-auto glass bg-base-100/50">
                                <div class="hero max-h-screen">
                                    <div class="hero-content flex-col lg:flex-row">
                                        <progress class="progress progress-primary w-56 "></progress>
                                        <div>
                                            <h1 class="text-5xl font-bold">准备运动</h1>
                                            <p class="py-6 text-2xl">运动快乐每一天!</p>
                                            <button class="btn btn-primary" onclick={() => setWindow("首页")}>开始计时</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Match>
                        <Match when={window() === "下班"}>
                            <div class="card lg:card-side w-auto glass bg-base-100/50">
                                <div class="hero max-h-screen">
                                    <div class="hero-content flex-col lg:flex-row">
                                        <progress class="progress progress-primary w-56 "></progress>
                                        <div>
                                            <h1 class="text-5xl font-bold">准备休息</h1>
                                            <p class="py-6 text-2xl">越努力越幸运!</p>
                                            <button class="btn btn-primary" onclick={() => setWindow("登录")}>现在停止运动</button>
                                            <button class="btn btn-primary" onclick={() => setWindow("首页")}>继续坚持运动</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Match>
                    </Switch>


                </div>
            </div>
        </div>
    );
}

export default Login;