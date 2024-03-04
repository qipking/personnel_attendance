import { Employees } from "./Table";
import Database from "tauri-plugin-sql-api";

// postgres
const db = await Database.load("postgres://postgres:1313113@localhost/personnel_attendance");

// Insert record
await db.execute("INSERT INTO users (name, age) VALUES ('John', 30)");

// Query database
const results = await db.execute("SELECT * FROM users");
console.log(results);

const EmployeesRegistration: Employees = {
    EmpID: "001",
    Name: "张三",
    Gender: "女",
    Age: "35",
    Phone: "12345678901",
    Email: "a@b.c",
    AttendanceID: "1000"
};

function Registration() {
    
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">个人信息</h1>
                <dl class="divide-y p-8 bg-base-100 rounded-box shadow">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">员工ID</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">120000</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">姓 名</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">性 别</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">男</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">年 龄</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">22</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">联系方式</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">12345620000</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-lg font-medium leading-6">邮 箱</dt>
                        <dd class="mt-1 text leading-6 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
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