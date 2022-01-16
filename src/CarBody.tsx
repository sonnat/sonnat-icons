/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarBodyPaths from "./paths/CarBody";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarBody = createSvgIcon(CarBodyPaths, "CarBody") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarBody;
