function BusinessTripPage() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">历史运动监测数据</h1>
                <div class="overflow-x-auto table-md rounded-box shadow max-h-96">
                    <table class="table table-xs table-pin-rows table-pin-cols bg-base-100">
                        <thead>
                            <tr>
                                <th></th>
                                <td>运动开始时间</td>
                                <td>运动结束时间</td>
                                <td>运动耗时</td>
                                <td>平均心率</td>
                                <td>平均体温</td>
                                <td>运动步数</td>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                                <th>1</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default BusinessTripPage;