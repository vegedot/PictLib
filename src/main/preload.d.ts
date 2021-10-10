import ICounter from "./bridges/counter";

declare global {
  interface Window {
    counter: ICounter;
  }
}
