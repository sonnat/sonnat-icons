/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SwapHorizontalPaths from "./paths/SwapHorizontal";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SwapHorizontal = createSvgIcon(SwapHorizontalPaths, "SwapHorizontal") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SwapHorizontal;
