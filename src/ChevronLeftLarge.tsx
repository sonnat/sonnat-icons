/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronLeftLargePaths from "./paths/ChevronLeftLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronLeftLarge = createSvgIcon(ChevronLeftLargePaths, "ChevronLeftLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronLeftLarge;
