function Overtime() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">上报加班信息</h1>
                <div class="p-8 bg-base-100 rounded-box shadow">
                    <form action="overtime">
                        <fieldset>
                            <legend class="font-bold">加班员工</legend>
                            <div class="form-control w-full max-w-xs">
                                <label for="EmpID" class="label">
                                    <span class="label-text">员工ID</span>
                                </label>
                                <input id="EmpID" type="text" placeholder="六位数字" class="input input-primary w-full max-w-xs" />
                                <label class="label">
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label for="Name" class="label">
                                    <span class="label-text">姓名</span>
                                </label>
                                <input id="Name" type="text" placeholder="员工姓名" class="input input-primary w-full max-w-xs" />
                                <label class="label">
                                </label>
                            </div>
                        </fieldset>
                        <fieldset class="grid grid-cols-6">
                            <legend class="font-bold py-8 col-span-full">加班信息</legend>
                            <div class="form-control w-full max-w-xs col-span-3">
                                <label for="StartTime" class="label">
                                    <span class="label-text">加班起始时间</span>
                                </label>
                                <input id="StartTime" type="text" placeholder="年-月-日 时:分:秒" class="input input-primary w-full max-w-xs" />
                                <label class="label">
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs col-span-3">
                                <label for="EndTime" class="label">
                                    <span class="label-text">加班结束时间</span>
                                </label>
                                <input id="EndTime" type="text" placeholder="年-月-日 时:分:秒" class="input input-primary w-full max-w-xs" />
                                <label class="label">
                                </label>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Overtime;