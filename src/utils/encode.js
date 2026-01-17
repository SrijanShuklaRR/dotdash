import { MORSE_MAP } from "./morseMap";

export function encode(text = "") {
  return text
    .toUpperCase()
    .split("")
    .map((c) => MORSE_MAP[c] || "")
    .join(" ");
}
