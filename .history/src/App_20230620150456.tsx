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
      {/* Open the modal using ID.showModal() method */}<font></font>
      <button className="btn" onClick={() => window.my_modal_2.showModal()}>open modal</button><font></font>
      <dialog id="my_modal_2" className="modal"><font></font>
        <form method="dialog" className="modal-box"><font></font>
          <h3 className="font-bold text-lg">Hello!</h3><font></font>
          <p className="py-4">Press ESC key or click outside to close</p><font></font>
        </form><font></font>
        <form method="dialog" className="modal-backdrop"><font></font>
          <button>close</button><font></font>
        </form><font></font>
      </dialog>
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
