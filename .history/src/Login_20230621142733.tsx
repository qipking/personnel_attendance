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
                            <div class="card lg:card-side w-4/5 glass bg-base-100/50">
                                <div class="hero max-h-screen">
                                    <div class="hero-content flex-col lg:flex-row">
                                        <div class="stats shadow">

                                            <div class="stat">
                                                <div class="stat-figure text-primary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                                </div>
                                                <div class="stat-title">Total Likes</div>
                                                <div class="stat-value text-primary">25.6K</div>
                                                <div class="stat-desc">21% more than last month</div>
                                            </div>

                                            <div class="stat">
                                                <div class="stat-figure text-secondary">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                                </div>
                                                <div class="stat-title">Page Views</div>
                                                <div class="stat-value text-secondary">2.6M</div>
                                                <div class="stat-desc">21% more than last month</div>
                                            </div>

                                            <div class="stat">
                                                <div class="stat-figure text-secondary">
                                                    <div class="avatar online">
                                                        <div class="w-16 rounded-full">
                                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="stat-value">86%</div>
                                                <div class="stat-title">Tasks done</div>
                                                <div class="stat-desc text-secondary">31 tasks remaining</div>
                                            </div>

                                        </div>
                                        <div>
                                            <h1 class="text-5xl font-bold">迎接新的一天，加油!</h1>
                                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                                            <h1 class="text-5xl font-bold">忙碌了一天，辛苦了!</h1>
                                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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