/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarPaths from "./paths/Car";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Car = createSvgIcon(CarPaths, "Car") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Car;
