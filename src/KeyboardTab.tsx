/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KeyboardTabPaths from "./paths/KeyboardTab";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const KeyboardTab = createSvgIcon(KeyboardTabPaths, "KeyboardTab") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default KeyboardTab;
