/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarStarPaths from "./paths/CarStar";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarStar = createSvgIcon(CarStarPaths, "CarStar") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarStar;
