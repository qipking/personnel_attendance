import { createSignal, createEffect } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import { window, setWindow, page, setPage } from "./App";

function Login() {
    return (
        <div class="bg-cover bg-center" style="background-image: url(https://cn.bing.com/th?id=OHR.EagleTree_ZH-CN7775102951_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp);">
            <div class="hero backdrop-blur-sm min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card w-full glass bg-base-100/50">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>

                    <div class="text-center text-slate-200 lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card glass flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100/50">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary" onclick={() => setWindow("首页")}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;