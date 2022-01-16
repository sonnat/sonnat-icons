/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KeyboardOPaths from "./paths/KeyboardO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const KeyboardO = createSvgIcon(KeyboardOPaths, "KeyboardO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default KeyboardO;
