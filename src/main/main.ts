// Package Imports =============================================================
// Native Packages
import { join } from "path";
import { format } from "url";
// Electron Packages
import isDev from "electron-is-dev";
import { BrowserWindow, app } from "electron";
import ElectronStore from "electron-store";
// Other Packages
import prepareNext from "electron-next";
import prepareBridges from "./bridges/prepareBridges";

// Prepare Bridges =============================================================
prepareBridges(app.getPath("userData"), app.getPath("pictures"));

// App =========================================================================
// Main Window
const createWindow = () => {
  // get config
  const config = new ElectronStore({ watch: true });
  const position = (config.get("window.position") as number[]) || 0;
  const size = (config.get("window.size") as number[]) || [800, 600];

  // create window
  const mainWindow = new BrowserWindow({
    width: size[0],
    height: size[1],
    x: position[0],
    y: position[1],
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js")
    }
  });

  mainWindow.on("close", () => {
    config.set("window.position", mainWindow.getPosition());
    config.set("window.size", mainWindow.getSize());
  });

  const url = isDev
    ? "http://localhost:8000/"
    : format({
        pathname: join(__dirname, "../renderer/index.html"),
        protocol: "file:",
        slashes: true
      });

  mainWindow.loadURL(url);
  // devtool
  if (isDev) mainWindow.webContents.openDevTools({ mode: "detach" });
};

// App
// Prepare the renderer once the app is ready
app.on("ready", async () => {
  // for nextjs
  await prepareNext("src/renderer");

  // create window
  createWindow();
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);
