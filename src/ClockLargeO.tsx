/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ClockLargeOPaths from "./paths/ClockLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ClockLargeO = createSvgIcon(ClockLargeOPaths, "ClockLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ClockLargeO;
