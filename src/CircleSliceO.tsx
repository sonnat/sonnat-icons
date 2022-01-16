/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CircleSliceOPaths from "./paths/CircleSliceO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CircleSliceO = createSvgIcon(CircleSliceOPaths, "CircleSliceO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CircleSliceO;
