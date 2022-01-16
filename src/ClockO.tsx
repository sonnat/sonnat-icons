/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ClockOPaths from "./paths/ClockO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ClockO = createSvgIcon(ClockOPaths, "ClockO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ClockO;
