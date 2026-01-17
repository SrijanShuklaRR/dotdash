import { useState } from "react";
import Header from "./components/Header";
import ModeToggle from "./components/ModeToggle";
import TextArea from "./components/TextArea";
import Controls from "./components/Controls";
import { useMorseTranslator } from "./hooks/useMorseTranslator";
import { useMorseAudio } from "./hooks/useMorseAudio";

export default function App() {
  const [mode, setMode] = useState("encode");
  const [input, setInput] = useState("");
  const { output } = useMorseTranslator(input, mode);
  const { play } = useMorseAudio(20);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10 gap-8">
      <Header />
      <ModeToggle mode={mode} setMode={setMode} />

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6">
        <TextArea
          label="Input"
          value={input}
          onChange={setInput}
          editable
        />
        <TextArea
          label="Output"
          value={output}
        />
      </div>

      <Controls
        onPlay={() => play(output)}
        onClear={() => setInput("")}
      />
    </div>
  );
}
