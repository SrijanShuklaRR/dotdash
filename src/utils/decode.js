import { MORSE_MAP } from "./morseMap";

const REVERSE_MAP = Object.fromEntries(
  Object.entries(MORSE_MAP).map(([k, v]) => [v, k])
);

export function decode(morse = "") {
  return morse
    .split(" ")
    .map((c) => REVERSE_MAP[c] || "")
    .join("");
}
