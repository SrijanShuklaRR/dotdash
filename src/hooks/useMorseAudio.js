export function useMorseAudio(wpm = 20) {
  const unit = 1.2 / wpm;
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const playTone = (duration) => {
    const osc = audioCtx.createOscillator();
    osc.frequency.value = 600;
    osc.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  };

  const play = async (morse) => {
    for (const char of morse) {
      if (char === ".") playTone(unit);
      if (char === "-") playTone(unit * 3);
      await new Promise((r) => setTimeout(r, unit * 1000));
    }
  };

  return { play };
}
