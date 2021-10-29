import { readFile } from "fs/promises";

// Prepare Function ============================================================
// eslint-disable-next-line @typescript-eslint/no-empty-function
export async function prepareImage(): Promise<void> {}

// Bridge ======================================================================
const ImageBridge: IImageBridge = {
  // file validation(jpg, png, gif)??
  get: (file: string): Promise<string> => {
    return new Promise<string>((resolve) => {
      readFile(file, "base64").then((result) => {
        resolve("data:image/gif;base64," + result);
      });
    });
  }
};

export interface IImageBridge {
  get: (file: string) => Promise<string>;
}

export default ImageBridge;
