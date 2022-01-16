/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleSlicePaths from "./paths/CircleSlice";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleSlice = createSvgIcon(CircleSlicePaths, "CircleSlice") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleSlice;
