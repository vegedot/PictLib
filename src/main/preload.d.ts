import { ICounter } from "./bridges/counter";
import { IDatabaseBridge } from "./bridges/database/databaseBridge";
import { IConfigBridge } from "./bridges/config/configBridge";
import { IImageBridge } from "./bridges/image/imageBridge";

declare global {
  interface Window {
    counter: ICounter;
    database: IDatabaseBridge;
    config: IConfigBridge;
    image: IImageBridge;
  }
}
