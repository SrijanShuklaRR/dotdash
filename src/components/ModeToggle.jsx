export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="flex bg-neutral-800 rounded-lg p-1">
      {["encode", "decode"].map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`px-4 py-2 rounded-md text-sm ${
            mode === m ? "bg-blue-600" : "text-neutral-400"
          }`}
        >
          {m.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
