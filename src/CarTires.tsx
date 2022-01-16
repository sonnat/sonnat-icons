/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarTiresPaths from "./paths/CarTires";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarTires = createSvgIcon(CarTiresPaths, "CarTires") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarTires;
