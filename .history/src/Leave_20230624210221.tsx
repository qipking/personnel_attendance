
function Leave() {

    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">创建请假申请</h1>
                <form action="Trip" >
                    <fieldset class="grid grid-cols-6">
                        <legend class="font-bold py-4 col-span-full">请假员工</legend>
                        <div class="form-control w-full px-4 col-span-2">
                            <label for="EmpID" class="label">
                                <span class="label-text">员工ID</span>
                            </label>
                            <input id="EmpID" type="text" placeholder="六位数字" class="input input-primary w-full" />
                            <label class="label">
                            </label>
                        </div>
                        <div class="form-control w-full px-4 col-span-3">
                            <label for="Name" class="label">
                                <span class="label-text">姓名</span>
                            </label>
                            <input id="Name" type="text" placeholder="员工姓名" class="input input-primary w-full" />
                            <label class="label">
                            </label>
                        </div>
                    </fieldset>
                    <div class="divider"></div>
                    <fieldset class="grid grid-cols-6">
                        <legend class="font-bold py-4 col-span-full">请假理由</legend>
                        <div class="w-full px-4 bg-red-500 col-span-4">
                            <textarea class="textarea textarea-warning w-full" placeholder="Bio"></textarea>
                        </div>
                        <div class="w-full px-4 col-span-6">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text text-lg">技术支持类：出差目的为提供技术支持、解决技术问题等。</span>
                                    <input type="radio" name="radio-10" class="radio checked:bg-primary" />
                                </label>
                            </div>
                        </div>
                        <div class="w-full px-4 col-span-6">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text text-lg">项目实施类：出差目的为项目现场实施、安装调试等。</span>
                                    <input type="radio" name="radio-10" class="radio checked:bg-primary" />
                                </label>
                            </div>
                        </div>
                        <div class="w-full px-4 col-span-6">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text text-lg">培训类：出差目的为参加培训、提供培训等。</span>
                                    <input type="radio" name="radio-10" class="radio checked:bg-primary" />
                                </label>
                            </div>
                        </div>
                        <div class="w-full px-4 col-span-6">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text text-lg">调研类：出差目的为市场调研、竞品分析等。</span>
                                    <input type="radio" name="radio-10" class="radio checked:bg-primary" />
                                </label>
                            </div>
                        </div>
                        <div class="w-full px-4 col-span-6">
                            <div class="form-control">
                                <label class="label cursor-pointer">
                                    <span class="label-text text-lg">行政类：出差目的为参加会议、办理行政手续等。</span>
                                    <input type="radio" name="radio-10" class="radio checked:bg-primary" />
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="divider"></div>
                    <fieldset class="grid grid-cols-6">
                        <legend class="font-bold py-4 col-span-full">请假时间</legend>
                        <div class="form-control w-full px-4 col-span-3">
                            <label for="StartTime" class="label">
                                <span class="label-text">请假起始时间</span>
                            </label>
                            <input id="StartTime" type="text" placeholder="年-月-日 时:分:秒" class="input input-primary w-full" />
                            <label class="label">
                            </label>
                        </div>
                        <div class="form-control w-full px-4 col-span-3">
                            <label for="EndTime" class="label">
                                <span class="label-text">请假结束时间</span>
                            </label>
                            <input id="EndTime" type="text" placeholder="年-月-日 时:分:秒" class="input input-primary w-full" />
                            <label class="label">
                            </label>
                        </div>
                    </fieldset>
                    <div class="divider"></div>
                    <div class="mt-6 flex justify-end gap-x-6">
                        <button class="btn btn-outline">清空</button>
                        <button class="btn btn-primary">提交</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Leave;