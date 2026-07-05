export default function NotesPage() {

    return (
        
        <main className=" min-h-screen bg-teal-900 text-neutral-100 flex items-center justify-center p-6">
            <div className=" text-center">
                <h1 className=" text-4xl font-bold">
                    StateCraft Notes
                </h1>
                <p className=" text-neutral-300 mt-4 text-lg">
                    This is where I store Concepts, Reminders, Discoveries from my coding journey.
                </p>
                <p className=" text-neutral-300 mt-6 leading-relaxed">
                    Variables store data.
                    </p>
                    <p className=" text-neutral-300 mt-6 leading-text">
                    JSX allows JavaScript inside HTML-like code.
                </p>
                <p className=" text-neutral-300 mt-6 leading-text">
                    Curly braces let JSX evaluate JavaScript.
                </p>
            </div>
        </main>
    );
}