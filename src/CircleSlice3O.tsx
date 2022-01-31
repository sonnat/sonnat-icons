/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleSlice3OPaths from "./paths/CircleSlice3O";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleSlice3O = createSvgIcon(CircleSlice3OPaths, "CircleSlice3O") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleSlice3O;
