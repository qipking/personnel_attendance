import { createSignal, createEffect } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";

function About() {

    const [greetMsg, setGreetMsg] = createSignal("");
    const [name, setName] = createSignal("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", { name: name() }));
    }
    return (
        <>
            <h1 class="font-bold text-lg">关于</h1>
            <div class="p-8 bg-base-200 rounded-box shadow">

                <p class="py-4">人员考勤系统客户端</p>
                <p class="py-4">lichi3030213313</p>
                <p class="py-4">指导老师：李洪飞</p>


                <div class="p-8 m-8 bg-base-100 rounded-box shadow">
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
        </>
    );
}

export default About;