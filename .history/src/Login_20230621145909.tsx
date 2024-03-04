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
                                <h1 class="text-5xl font-bold">Login now!</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                                            <a href="#" class="label-text-alt link link-hover">忘记密码?</a>
                                        </label>
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary" onclick={() => setWindow("上班")}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </Match>
                        <Match when={window() === "上班"}>
                            <div class="card lg:card-side w-auto glass bg-base-100/50">
                                <div class="hero max-h-screen">
                                    <div class="hero-content flex-col lg:flex-row">
                                        <progress class="progress w-56 "></progress>
                                        <div>
                                            <h1 class="text-5xl font-bold">0000</h1>
                                            <p class="py-6">人已经打卡</p>
                                            <button class="btn btn-primary" onclick={() => setWindow("首页")}>打卡上班</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Match>
                        <Match when={window() === "下班"}>
                            <div class="card lg:card-side w-4/5 glass bg-base-100/50">
                                <div class="hero max-h-screen">
                                    <div class="hero-content flex-col lg:flex-row">
                                        <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                                        <div>
                                            <h1 class="text-5xl font-bold">99</h1>
                                            <p class="py-6">人已经下班</p>
                                            <button class="btn btn-primary" onclick={() => setWindow("登录")}>下班打卡</button>
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