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
    <>
      <div>
        <div className="navbar bg-base-300 rounded-box"><font></font>
          <div className="flex-1 px-2 lg:flex-none"><font></font>
            <a className="text-lg font-bold">daisyUI</a><font></font>
          </div> <font></font>
          <div className="flex justify-end flex-1 px-2"><font></font>
            <div className="flex items-stretch"><font></font>
              <a className="btn btn-ghost rounded-btn">Button</a><font></font>
              <div className="dropdown dropdown-end"><font></font>
                <label tabIndex={0} className="btn btn-ghost rounded-btn">Dropdown</label><font></font>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"><font></font>
                  <li><a>Item 1</a></li> <font></font>
                  <li><a>Item 2</a></li><font></font>
                </ul><font></font>
              </div><font></font>
            </div><font></font>
          </div><font></font>
        </div>
      </div>

      <div class="container">
        <div>
          <ul className="menu bg-base-200 w-56 rounded-box"><font></font>
            <li><a>Item 1</a></li><font></font>
            <li><a>Item 2</a></li><font></font>
            <li><a>Item 3</a></li><font></font>
          </ul>
        </div>
        <h1>Welcome to Tauri!</h1>

        <div class="row">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo vite" alt="Vite logo" />
          </a>
          <a href="https://tauri.app" target="_blank">
            <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
          </a>
          <a href="https://solidjs.com" target="_blank">
            <img src={logo} class="logo solid" alt="Solid logo" />
          </a>
        </div>

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
          <button type="submit">Greet</button>
        </form>

        <p>{greetMsg()}</p>
      </div>
    </>
  );
}

export default App;
