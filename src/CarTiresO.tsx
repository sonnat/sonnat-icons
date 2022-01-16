/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarTiresOPaths from "./paths/CarTiresO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarTiresO = createSvgIcon(CarTiresOPaths, "CarTiresO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarTiresO;
