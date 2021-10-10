import { contextBridge } from "electron";
import Counter from "./bridges/counter";

contextBridge.exposeInMainWorld("counter", Counter);
