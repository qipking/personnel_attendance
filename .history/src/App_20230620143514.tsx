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
            <div className="drawer"><font></font>
              <input id="my-drawer" type="checkbox" className="drawer-toggle" /><font></font>
              <div className="drawer-content"><font></font>
                {/* Page content here */}<font></font>
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">亖</label><font></font>
              </div> <font></font>
              <div className="drawer-side"><font></font>
                <label htmlFor="my-drawer" className="drawer-overlay"></label><font></font>
                <ul className="menu bg-base-200 p-4 w-80 h-full rounded-box"><font></font>
                  <li><a>Item 1</a></li><font></font>
                  <li><font></font>
                    <details open><font></font>
                      <summary>Parent</summary><font></font>
                      <ul><font></font>
                        <li><a>level 2 item 1</a></li><font></font>
                        <li><a>level 2 item 2</a></li><font></font>
                        <li><font></font>
                          <details open><font></font>
                            <summary>Parent</summary><font></font>
                            <ul><font></font>
                              <li><a>level 3 item 1</a></li><font></font>
                              <li><a>level 3 item 2</a></li><font></font>
                            </ul><font></font>
                          </details><font></font>
                        </li><font></font>
                      </ul><font></font>
                    </details><font></font>
                  </li><font></font>
                  <li><a>Item 3</a></li><font></font>
                </ul>
              </div><font></font>
            </div>
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
        <div className="collapse bg-base-200"><font></font>
          <input type="checkbox" /> <font></font>
          <div className="collapse-title text-xl font-medium"><font></font>
            Click me to show/hide content<font></font>
          </div><font></font>
          <div className="collapse-content"> <font></font>
            <p>hello</p><font></font>
          </div><font></font>
        </div>
      </div>

      <div class="container">
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
