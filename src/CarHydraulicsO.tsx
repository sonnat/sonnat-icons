/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarHydraulicsOPaths from "./paths/CarHydraulicsO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarHydraulicsO = createSvgIcon(CarHydraulicsOPaths, "CarHydraulicsO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarHydraulicsO;
