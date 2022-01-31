/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SwapHorizontalSquarePaths from "./paths/SwapHorizontalSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SwapHorizontalSquare = createSvgIcon(SwapHorizontalSquarePaths, "SwapHorizontalSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SwapHorizontalSquare;
