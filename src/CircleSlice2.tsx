/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleSlice2Paths from "./paths/CircleSlice2";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleSlice2 = createSvgIcon(CircleSlice2Paths, "CircleSlice2") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleSlice2;
