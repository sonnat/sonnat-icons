/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ClockLargePaths from "./paths/ClockLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ClockLarge = createSvgIcon(ClockLargePaths, "ClockLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ClockLarge;
