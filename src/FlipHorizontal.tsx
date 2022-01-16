/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlipHorizontalPaths from "./paths/FlipHorizontal";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FlipHorizontal = createSvgIcon(FlipHorizontalPaths, "FlipHorizontal") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FlipHorizontal;
