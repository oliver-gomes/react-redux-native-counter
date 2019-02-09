import { INCREMENT, DECREMENT, RESET } from "./types";

export function increment(payload) {
  return {
    type: INCREMENT,
    payload
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function reset() {
  return {
    type: RESET
  };
}
