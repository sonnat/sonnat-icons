/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StopPaths from "./paths/Stop";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Stop = createSvgIcon(StopPaths, "Stop") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Stop;
