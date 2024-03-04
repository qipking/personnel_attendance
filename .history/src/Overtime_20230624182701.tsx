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
                                <label for="text" class="label">
                                    <span class="label-text">What is your name?</span>
                                    <span class="label-text-alt">Top Right label</span>
                                </label>
                                <input name="text"  type="text" placeholder="Type here" class="input input-primary w-full max-w-xs" />
                                <label class="label">
                                    <span class="label-text-alt">Bottom Left label</span>
                                    <span class="label-text-alt">Bottom Right label</span>
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