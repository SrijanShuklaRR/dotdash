import { encode } from "../utils/encode";
import { decode } from "../utils/decode";

export function useMorseTranslator(input, mode) {
  const output = mode === "encode"
    ? encode(input)
    : decode(input);

  return { output };
}
