import { createSignal } from "solid-js";
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
