

function Registration() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">个人信息</h1>
                <dl class="divide-y p-8 bg-base-100 rounded-box shadow">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">姓 名</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">性 别</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">年 龄</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">联系方式</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">$120,000</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">邮 箱</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</dd>
                    </div>
                </dl>
                <div>
                    <button class="btn btn-primary btn-block right-0 my-8">更改信息</button>
                </div>
            </div>
        </>
    );
}

export default Registration;