/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SpeedometerPaths from "./paths/Speedometer";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Speedometer = createSvgIcon(SpeedometerPaths, "Speedometer") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Speedometer;
