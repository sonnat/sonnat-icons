/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleSlice4OPaths from "./paths/CircleSlice4O";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleSlice4O = createSvgIcon(CircleSlice4OPaths, "CircleSlice4O") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleSlice4O;
