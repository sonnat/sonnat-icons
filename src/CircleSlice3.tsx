/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleSlice3Paths from "./paths/CircleSlice3";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleSlice3 = createSvgIcon(CircleSlice3Paths, "CircleSlice3") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleSlice3;
