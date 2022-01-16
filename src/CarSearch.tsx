/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarSearchPaths from "./paths/CarSearch";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarSearch = createSvgIcon(CarSearchPaths, "CarSearch") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarSearch;
