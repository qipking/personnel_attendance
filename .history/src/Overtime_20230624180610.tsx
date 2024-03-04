function Overtime() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">上报加班信息</h1>
                <div class="p-8 bg-base-100 rounded-box shadow">
                    <form action="overtime">
                        <fieldset>
                            <legend>请假员工信息</legend>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Overtime;