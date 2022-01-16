/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KeyboardPaths from "./paths/Keyboard";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Keyboard = createSvgIcon(KeyboardPaths, "Keyboard") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Keyboard;
