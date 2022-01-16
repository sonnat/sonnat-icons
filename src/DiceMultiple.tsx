/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DiceMultiplePaths from "./paths/DiceMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DiceMultiple = createSvgIcon(DiceMultiplePaths, "DiceMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DiceMultiple;
