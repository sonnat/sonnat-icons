/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KeyboardFnPaths from "./paths/KeyboardFn";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const KeyboardFn = createSvgIcon(KeyboardFnPaths, "KeyboardFn") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default KeyboardFn;
