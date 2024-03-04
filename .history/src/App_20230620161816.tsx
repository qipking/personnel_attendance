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
    <>
      <div class="navbar bg-base-100"><font></font>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div class="flex-1"><font></font>
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a><font></font>
        </div><font></font>
        <div class="flex-none"><font></font>
          <div class="dropdown dropdown-end"><font></font>
            <label tabindex="0" class="btn btn-ghost btn-circle"><font></font>
              <div class="indicator"><font></font>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg><font></font>
                <span class="badge badge-sm indicator-item">8</span><font></font>
              </div><font></font>
            </label><font></font>
            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"><font></font>
              <div class="card-body"><font></font>
                <span class="font-bold text-lg">8 Items</span><font></font>
                <span class="text-info">Subtotal: $999</span><font></font>
                <div class="card-actions"><font></font>
                  <button class="btn btn-primary btn-block">View cart</button><font></font>
                </div><font></font>
              </div><font></font>
            </div><font></font>
          </div><font></font>
          <div class="dropdown dropdown-end"><font></font>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar"><font></font>
              <div class="w-10 rounded-full"><font></font>
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /><font></font>
              </div><font></font>
            </label><font></font>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><font></font>
              <li><font></font>
                <a class="justify-between"><font></font>
                  Profile<font></font>
                  <span class="badge">New</span><font></font>
                </a><font></font>
              </li><font></font>
              <li><a>Settings</a></li><font></font>
              <li><a>Logout</a></li><font></font>
            </ul><font></font>
          </div><font></font>
        </div><font></font>
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
