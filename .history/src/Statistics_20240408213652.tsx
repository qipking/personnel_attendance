import { createSignal, createEffect } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

import { window, setWindow, page, setPage } from "./App";

function Statistics() {
    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-4 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">运动统计排行榜</h1>
                <div class="stats bg-base-100 rounded-box shadow col-span-4">
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">步数</div>
                        <div class="stat-value text-primary">25.6K</div>
                        <div class="stat-desc">每月</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div class="stat-title">连续打卡日期</div>
                        <div class="stat-value text-secondary">2.5年</div>
                        <div class="stat-desc">21次被评为优秀运动员</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="stat-title">平均运动心率</div>
                        <div class="stat-value text-accent">86次/分</div>
                        <div class="stat-desc">异常次数： 31 次</div>
                    </div>

                </div>
            </div>

            <div class="grid grid-flow-row-dense grid-cols-1 grid-rows-1 m-8 ">
                <h1 class="text-2xl font-bold my-2">运动打卡记录</h1>
                <div class="overflow-x-auto table-md rounded-box shadow max-h-96">
                    <table class="table table-xs table-pin-rows table-pin-cols bg-base-100">
                        <thead>
                            <tr>
                                <th></th>
                                <td>用户ID</td>
                                <td>开始运动时间</td>
                                <td>结束时间时间</td>
                                <td>运动步数</td>
                                <td>平均心率</td>
                                <td>记录日期</td>
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
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td>Purple</td>
                                <th>2</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                <td>Red</td>
                                <th>3</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Marjy Ferencz</td>
                                <td>Office Assistant I</td>
                                <td>Rowe-Schoen</td>
                                <td>Russia</td>
                                <td>3/25/2021</td>
                                <td>Crimson</td>
                                <th>4</th>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Yancy Tear</td>
                                <td>Community Outreach Specialist</td>
                                <td>Wyman-Ledner</td>
                                <td>Brazil</td>
                                <td>5/22/2020</td>
                                <td>Indigo</td>
                                <th>5</th>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Irma Vasilik</td>
                                <td>Editor</td>
                                <td>Wiza, Bins and Emard</td>
                                <td>Venezuela</td>
                                <td>12/8/2020</td>
                                <td>Purple</td>
                                <th>6</th>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Meghann Durtnal</td>
                                <td>Staff Accountant IV</td>
                                <td>Schuster-Schimmel</td>
                                <td>Philippines</td>
                                <td>2/17/2021</td>
                                <td>Yellow</td>
                                <th>7</th>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>Sammy Seston</td>
                                <td>Accountant I</td>
                                <td>O'Hara, Welch and Keebler</td>
                                <td>Indonesia</td>
                                <td>5/23/2020</td>
                                <td>Crimson</td>
                                <th>8</th>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>Lesya Tinham</td>
                                <td>Safety Technician IV</td>
                                <td>Turner-Kuhlman</td>
                                <td>Philippines</td>
                                <td>2/21/2021</td>
                                <td>Maroon</td>
                                <th>9</th>
                            </tr>
                            <tr>
                                <th>10</th>
                                <td>Zaneta Tewkesbury</td>
                                <td>VP Marketing</td>
                                <td>Sauer LLC</td>
                                <td>Chad</td>
                                <td>6/23/2020</td>
                                <td>Green</td>
                                <th>10</th>
                            </tr>
                            <tr>
                                <th>11</th>
                                <td>Andy Tipple</td>
                                <td>Librarian</td>
                                <td>Hilpert Group</td>
                                <td>Poland</td>
                                <td>7/9/2020</td>
                                <td>Indigo</td>
                                <th>11</th>
                            </tr>
                            <tr>
                                <th>12</th>
                                <td>Sophi Biles</td>
                                <td>Recruiting Manager</td>
                                <td>Gutmann Inc</td>
                                <td>Indonesia</td>
                                <td>2/12/2021</td>
                                <td>Maroon</td>
                                <th>12</th>
                            </tr>
                            <tr>
                                <th>13</th>
                                <td>Florida Garces</td>
                                <td>Web Developer IV</td>
                                <td>Gaylord, Pacocha and Baumbach</td>
                                <td>Poland</td>
                                <td>5/31/2020</td>
                                <td>Purple</td>
                                <th>13</th>
                            </tr>
                            <tr>
                                <th>14</th>
                                <td>Maribeth Popping</td>
                                <td>Analyst Programmer</td>
                                <td>Deckow-Pouros</td>
                                <td>Portugal</td>
                                <td>4/27/2021</td>
                                <td>Aquamarine</td>
                                <th>14</th>
                            </tr>
                            <tr>
                                <th>15</th>
                                <td>Moritz Dryburgh</td>
                                <td>Dental Hygienist</td>
                                <td>Schiller, Cole and Hackett</td>
                                <td>Sri Lanka</td>
                                <td>8/8/2020</td>
                                <td>Crimson</td>
                                <th>15</th>
                            </tr>
                            <tr>
                                <th>16</th>
                                <td>Reid Semiras</td>
                                <td>Teacher</td>
                                <td>Sporer, Sipes and Rogahn</td>
                                <td>Poland</td>
                                <td>7/30/2020</td>
                                <td>Green</td>
                                <th>16</th>
                            </tr>
                            <tr>
                                <th>17</th>
                                <td>Alec Lethby</td>
                                <td>Teacher</td>
                                <td>Reichel, Glover and Hamill</td>
                                <td>China</td>
                                <td>2/28/2021</td>
                                <td>Khaki</td>
                                <th>17</th>
                            </tr>
                            <tr>
                                <th>18</th>
                                <td>Aland Wilber</td>
                                <td>Quality Control Specialist</td>
                                <td>Kshlerin, Rogahn and Swaniawski</td>
                                <td>Czech Republic</td>
                                <td>9/29/2020</td>
                                <td>Purple</td>
                                <th>18</th>
                            </tr>
                            <tr>
                                <th>19</th>
                                <td>Teddie Duerden</td>
                                <td>Staff Accountant III</td>
                                <td>Pouros, Ullrich and Windler</td>
                                <td>France</td>
                                <td>10/27/2020</td>
                                <td>Aquamarine</td>
                                <th>19</th>
                            </tr>
                            <tr>
                                <th>20</th>
                                <td>Lorelei Blackstone</td>
                                <td>Data Coordinator</td>
                                <td>Witting, Kutch and Greenfelder</td>
                                <td>Kazakhstan</td>
                                <td>6/3/2020</td>
                                <td>Red</td>
                                <th>20</th>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <td>AttendanceID </td>
                                <td>MorningIn</td>
                                <td>MorningOut</td>
                                <td>AfternoonIn</td>
                                <td>AfternoonOut</td>
                                <td>RecordDate</td>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Statistics;