import { atom } from "recoil";
import { KEYS_ATOM } from "./consts";

export const textState = atom({
  key: KEYS_ATOM.TEXT_STATE,
  default: ''
});