function Overtime() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">上报加班信息</h1>
                <div class="p-8 bg-base-100 rounded-box shadow">
                    <form action="overtime">
                        <fieldset>
                            <legend class="font-bold">加班员工信息</legend>
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
                    </form>
                </div>
            </div>
        </>
    );
}

export default Overtime;