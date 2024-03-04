import { createSignal, createEffect } from "solid-js";

import { window, setWindow, page, setPage } from "./App";

function Leaderboard() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">工作排名</h1>
                <div class="py-24 sm:py-32 p-8 bg-base-100 rounded-box shadow">
                    <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div class="max-w-2xl">
                            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">本月最佳员工</h2>
                            <p class="mt-6 text-lg leading-8">爱岗敬业、争创一流、艰苦奋斗、勇于创新、淡泊名利、甘于奉献、执着专注、精益求精、一丝不苟、追求卓越。</p>
                        </div>
                        <ul role="list" class="grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            <li>
                                <div class="flex items-center gap-x-6">
                                    <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                                    <div>
                                        <h3 class="text-base font-semibold leading-7 tracking-tight">Leslie Alexander</h3>
                                        <p class="text-sm font-semibold leading-6 text-primary">Co-Founder / CEO</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-x-6">
                                    <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                                    <div>
                                        <h3 class="text-base font-semibold leading-7 tracking-tight">Leslie Alexander</h3>
                                        <p class="text-sm font-semibold leading-6 text-primary">Co-Founder / CEO</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-x-6">
                                    <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                                    <div>
                                        <h3 class="text-base font-semibold leading-7 tracking-tight">Leslie Alexander</h3>
                                        <p class="text-sm font-semibold leading-6 text-primary">Co-Founder / CEO</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-x-6">
                                    <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                                    <div>
                                        <h3 class="text-base font-semibold leading-7 tracking-tight">Leslie Alexander</h3>
                                        <p class="text-sm font-semibold leading-6 text-primary">Co-Founder / CEO</p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Leaderboard;