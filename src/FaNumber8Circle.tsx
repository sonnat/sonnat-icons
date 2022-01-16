/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FaNumber8CirclePaths from "./paths/FaNumber8Circle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FaNumber8Circle = createSvgIcon(FaNumber8CirclePaths, "FaNumber8Circle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FaNumber8Circle;
