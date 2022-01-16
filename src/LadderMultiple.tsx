/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LadderMultiplePaths from "./paths/LadderMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LadderMultiple = createSvgIcon(LadderMultiplePaths, "LadderMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LadderMultiple;
