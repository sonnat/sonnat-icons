/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronRightLargePaths from "./paths/ChevronRightLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronRightLarge = createSvgIcon(ChevronRightLargePaths, "ChevronRightLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronRightLarge;
