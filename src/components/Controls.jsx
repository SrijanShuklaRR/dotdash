export default function Controls({ onPlay, onClear }) {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPlay}
        className="bg-blue-600 px-5 py-2 rounded-lg"
      >
        ▶ Play Morse
      </button>
      <button
        onClick={onClear}
        className="bg-neutral-800 px-5 py-2 rounded-lg"
      >
        Clear
      </button>
    </div>
  );
}
