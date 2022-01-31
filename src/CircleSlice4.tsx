/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleSlice4Paths from "./paths/CircleSlice4";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleSlice4 = createSvgIcon(CircleSlice4Paths, "CircleSlice4") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleSlice4;
