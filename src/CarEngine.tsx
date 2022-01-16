/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarEnginePaths from "./paths/CarEngine";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarEngine = createSvgIcon(CarEnginePaths, "CarEngine") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarEngine;
