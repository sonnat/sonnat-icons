/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TimerPaths from "./paths/Timer";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Timer = createSvgIcon(TimerPaths, "Timer") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Timer;
