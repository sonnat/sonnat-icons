/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarHydraulicsPaths from "./paths/CarHydraulics";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarHydraulics = createSvgIcon(CarHydraulicsPaths, "CarHydraulics") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarHydraulics;
