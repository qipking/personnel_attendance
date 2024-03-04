function Overtime() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">上报加班信息</h1>
                <div class="p-8 bg-base-100 rounded-box shadow">
                    <form action="overtime">
                        <fieldset class="grid grid-cols-6">
                            <legend class="font-bold py-4 col-span-full">加班员工</legend>
                            <div class="form-control w-full px-4 col-span-3">
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
                        <fieldset class="grid grid-cols-6">
                            <legend class="font-bold py-4 col-span-full">加班时间</legend>
                            <div class="form-control w-full px-4 col-span-3">
                                <label for="StartTime" class="label">
                                    <span class="label-text">加班起始时间</span>
                                </label>
                                <input id="StartTime" type="text" placeholder="年-月-日 时:分:秒" class="input input-primary w-full" />
                                <label class="label">
                                </label>
                            </div>
                            <div class="form-control w-full px-4 col-span-3">
                                <label for="EndTime" class="label">
                                    <span class="label-text">加班结束时间</span>
                                </label>
                                <input id="EndTime" type="text" placeholder="年-月-日 时:分:秒" class="input input-primary w-full" />
                                <label class="label">
                                </label>
                            </div>
                        </fieldset>
                        <fieldset class="grid grid-cols-10">
                            <legend class="font-bold py-4 col-span-full">加班类型</legend>
                            <div class="w-full px-4 col-span-6">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-lg">项目紧急：由于项目进度紧张，需要加班加点完成项目进度。</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-primary" checked />
                                    </label>
                                </div>
                            </div>
                            <div class="w-full px-4 col-span-6">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-lg">故障处理：由于系统或设备故障，需要加班进行修复和调试。</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-primary"  />
                                    </label>
                                </div>
                            </div>
                            <div class="w-full px-4 col-span-6">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-lg">需求变更：由于客户需求或要求变化，需要加班进行需求分析和方案调整。</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-primary"  />
                                    </label>
                                </div>
                            </div>
                            <div class="w-full px-4 col-span-6">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-lg">技术支持：由于客户或同事遇到技术问题，需要加班提供技术支持。</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-primary"  />
                                    </label>
                                </div>
                            </div>
                            <div class="w-full px-4 col-span-6">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-lg">培训学习：为了提升自己的技能和能力，需要加班参加培训或自主学习。</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-primary"  />
                                    </label>
                                </div>
                            </div>
                            <div class="w-full px-4 col-span-6">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-lg">部门会议：由于部门有重要会议需要加班进行讨论和决策。</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-primary"  />
                                    </label>
                                </div>
                            </div>
                            <div class=" px-4 col-span-6">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <span class="label-text text-lg">其他：其他原因，如公司活动、招聘面试等。</span>
                                        <input type="radio" name="radio-10" class="radio checked:bg-primary"  />
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Overtime;