/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TruckPaths from "./paths/Truck";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Truck = createSvgIcon(TruckPaths, "Truck") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Truck;
