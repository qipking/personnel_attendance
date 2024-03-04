import { createSignal, createEffect } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
//import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name: name() }));
  }

  const [days, setDays] = createSignal(15)
  const [hours, setHours] = createSignal(10)
  const [mins, setMins] = createSignal(24)
  const [secs, setSecs] = createSignal(27)

  function tick() {
    setSecs(s => s - 1)
    if (secs() === 0) {
      setSecs(s => 59)
      setMins(m => m - 1)
      if (mins() === 0) {
        setMins(m => 59)
        setHours(h => h - 1)
        if (hours() === 0) {
          setHours(h => 23)
          setDays(d => d - 1)
        }
      }
    }
  }

  createEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  })

  return (
    <>
      <div class="navbar bg-base-100">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>首页</a></li>
            <li><a>设置</a></li>
            <li><a>关于</a></li>
          </ul>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">员工端系统</a>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span class="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div class="card-body">
                <span class="font-bold text-lg">距离下班还有:</span>
                <span class="text-info">
                  <div class="grid grid-flow-col gap-5 text-center auto-cols-max">

                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span class="countdown font-mono text-2xl">
                        <span style={`--value: ${hours()}`}></span>
                      </span>
                      时
                    </div>
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span class="countdown font-mono text-2xl">
                        <span style={`--value: ${mins()}`}></span>
                      </span>
                      分
                    </div>
                    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                      <span class="countdown font-mono text-2xl">
                        <span style={`--value: ${secs()}`}></span>
                      </span>
                      秒
                    </div>

                  </div>
                </span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">立即下班</button>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a class="justify-between">
                  审批通知
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>个人信息</a></li>
              <li><a>工作报告</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="container">
        <h1>Welcome to Tauri!</h1>

        <p>Click on the Tauri, Vite, and Solid logos to learn more.</p>

        <form
          class="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button class="btn btn-primary btn-block">Greet</button>
        </form>

        <p>{greetMsg()}</p>
      </div>
    </>
  );
}

export default App;
