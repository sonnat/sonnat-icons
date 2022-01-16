/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LadderSquareMultiplePaths from "./paths/LadderSquareMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LadderSquareMultiple = createSvgIcon(LadderSquareMultiplePaths, "LadderSquareMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LadderSquareMultiple;
