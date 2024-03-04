import { createSignal } from "solid-js";
import logo from "./assets/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name: name() }));
  }

  return (
    <div>
      <div class="stats shadow"><font></font>
        <font></font>
        <div class="stat"><font></font>
          <div class="stat-figure text-primary"><font></font>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg><font></font>
          </div><font></font>
          <div class="stat-title">Total Likes</div><font></font>
          <div class="stat-value text-primary">25.6K</div><font></font>
          <div class="stat-desc">21% more than last month</div><font></font>
        </div><font></font>
        <font></font>
        <div class="stat"><font></font>
          <div class="stat-figure text-secondary"><font></font>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg><font></font>
          </div><font></font>
          <div class="stat-title">Page Views</div><font></font>
          <div class="stat-value text-secondary">2.6M</div><font></font>
          <div class="stat-desc">21% more than last month</div><font></font>
        </div><font></font>
        <font></font>
        <div class="stat"><font></font>
          <div class="stat-figure text-secondary"><font></font>
            <div class="avatar online"><font></font>
              <div class="w-16 rounded-full"><font></font>
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /><font></font>
              </div><font></font>
            </div><font></font>
          </div><font></font>
          <div class="stat-value">86%</div><font></font>
          <div class="stat-title">Tasks done</div><font></font>
          <div class="stat-desc text-secondary">31 tasks remaining</div><font></font>
        </div><font></font>
        <font></font>
      </div>

      <ul class="menu bg-base-200 lg:menu-horizontal rounded-box"><font></font>
        <li><font></font>
          <a><font></font>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg><font></font>
            Inbox<font></font>
            <span class="badge badge-sm">99+</span><font></font>
          </a><font></font>
        </li><font></font>
        <li><font></font>
          <a><font></font>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><font></font>
            Updates<font></font>
            <span class="badge badge-sm badge-warning">NEW</span><font></font>
          </a><font></font>
        </li><font></font>
        <li><font></font>
          <a><font></font>
            Stats<font></font>
            <span class="badge badge-xs badge-info"></span><font></font>
          </a><font></font>
        </li><font></font>
      </ul>

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
    </div>
  );
}

export default App;
