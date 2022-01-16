/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarSeatbeltPaths from "./paths/CarSeatbelt";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarSeatbelt = createSvgIcon(CarSeatbeltPaths, "CarSeatbelt") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarSeatbelt;
