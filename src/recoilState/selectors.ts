import { selector } from "recoil";
import { textState } from ".";
import { KEYS_ATOM } from "./consts";

export const charCountState = selector({
  key: KEYS_ATOM.COUNT_SELECTOR,
  get: ({get}) => {
    const text = get(textState)
    console.log(text)
    return text.length;
  }
})
