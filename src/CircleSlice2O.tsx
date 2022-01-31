/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleSlice2OPaths from "./paths/CircleSlice2O";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleSlice2O = createSvgIcon(CircleSlice2OPaths, "CircleSlice2O") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleSlice2O;
