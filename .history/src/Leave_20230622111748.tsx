function Leave() {
    return (
        <>
            <h1>请假</h1>
            <div class="p-8 m-8 text-base-content rounded-box shadow">
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

export default Leave;