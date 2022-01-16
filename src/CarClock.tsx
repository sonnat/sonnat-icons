/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarClockPaths from "./paths/CarClock";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarClock = createSvgIcon(CarClockPaths, "CarClock") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarClock;
