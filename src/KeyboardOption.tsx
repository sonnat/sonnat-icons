/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KeyboardOptionPaths from "./paths/KeyboardOption";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const KeyboardOption = createSvgIcon(KeyboardOptionPaths, "KeyboardOption") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default KeyboardOption;
