/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KeyboardTabReversePaths from "./paths/KeyboardTabReverse";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const KeyboardTabReverse = createSvgIcon(KeyboardTabReversePaths, "KeyboardTabReverse") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default KeyboardTabReverse;
