/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ClockPaths from "./paths/Clock";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Clock = createSvgIcon(ClockPaths, "Clock") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Clock;
