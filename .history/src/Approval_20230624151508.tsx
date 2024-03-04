function Approval() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2 text-gray-900 ">审核通知</h1>
                <ul role="list" class="p-8 bg-base-100 rounded-box shadow">
                    <li class="my-2">
                        <div class="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                                <h3 class="font-bold text-lg ">您的“请假申请”</h3>
                                <div class="text-2xs">不予通过，请假理由不合适。</div>
                            </div>
                            <button class="btn btn-wide">收到</button>
                        </div>
                    </li>
                    <li class="my-2">
                        <div class="alert alert-success">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                                <h3 class="font-bold text-lg ">您的“加班申报”</h3>
                                <div class="text-2xs">已经记录，祝您加班愉快。</div>
                            </div>
                            <button class="btn btn-wide">收到</button>
                        </div>
                    </li>
                    <li class="my-2">
                        <div class="alert alert-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <h3 class="font-bold text-lg ">您的“调休申请”</h3>
                                <div class="text-2xs">正在审核，请假耐心等待。</div>
                            </div>
                        </div>
                    </li>
                    <li class="my-2">
                        <div class="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                                <h3 class="font-bold text-lg ">您的“请假申请”</h3>
                                <div class="text-2xs">不予通过，请假理由不合适。</div>
                            </div>
                            <button class="btn btn-wide">收到</button>
                        </div>
                    </li>
                    <li class="my-2">
                        <div class="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                                <h3 class="font-bold text-lg ">您的“请假申请”</h3>
                                <div class="text-2xs">不予通过，请假理由不合适。</div>
                            </div>
                            <button class="btn btn-wide">收到</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Approval;