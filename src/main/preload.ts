import { contextBridge } from "electron";
import Counter from "./bridges/counter";
import DatabaseBridge from "./bridges/database/databaseBridge";
import ConfigBridge from "./bridges/config/configBridge";
import ImageBridge from "./bridges/image/imageBridge";

contextBridge.exposeInMainWorld("counter", Counter);
contextBridge.exposeInMainWorld("database", DatabaseBridge);
contextBridge.exposeInMainWorld("config", ConfigBridge);
contextBridge.exposeInMainWorld("image", ImageBridge);
