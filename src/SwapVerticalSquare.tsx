/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SwapVerticalSquarePaths from "./paths/SwapVerticalSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SwapVerticalSquare = createSvgIcon(SwapVerticalSquarePaths, "SwapVerticalSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SwapVerticalSquare;
