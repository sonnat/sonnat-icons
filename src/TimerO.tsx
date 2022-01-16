/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TimerOPaths from "./paths/TimerO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TimerO = createSvgIcon(TimerOPaths, "TimerO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TimerO;
