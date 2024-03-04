import { createSignal, createEffect, Switch, Match } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import { window, setWindow, page, setPage } from "./App";

function Login() {
    return (
        <div class="bg-cover bg-center" style="background-image: url(https://cn.bing.com/th?id=OHR.EagleTree_ZH-CN7775102951_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp);">
            <div class="hero backdrop-blur-sm min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <Switch fallback={<Login />}>
                        <Match when={window() === "登录"}>
                            <div class="text-center text-slate-200 lg:text-left">
                                <h1 class="text-5xl font-bold">登陆</h1>
                                <p class="py-6">即将开启,打工人全新的一天。</p>
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
                                        <input type="text" placeholder="password" class="input input-bordered" />
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
                                        </label>
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary" onclick={() => setWindow("上班")}>Login</button>
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
                                            <h1 class="text-5xl font-bold">完成打卡</h1>
                                            <p class="py-6 text-3xl">上班不迟到,工作不加班!</p>
                                            <button class="btn btn-primary" onclick={() => setWindow("首页")}>打卡上班</button>
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
                                            <h1 class="text-5xl font-bold">准备离开</h1>
                                            <p class="py-6 text-3xl">不忘初心,牢记使命!</p>
                                            <button class="btn btn-primary" onclick={() => setWindow("登录")}>现在下班</button>
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