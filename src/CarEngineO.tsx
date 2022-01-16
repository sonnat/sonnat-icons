/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarEngineOPaths from "./paths/CarEngineO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarEngineO = createSvgIcon(CarEngineOPaths, "CarEngineO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarEngineO;
