/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KeyboardEscPaths from "./paths/KeyboardEsc";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const KeyboardEsc = createSvgIcon(KeyboardEscPaths, "KeyboardEsc") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default KeyboardEsc;
