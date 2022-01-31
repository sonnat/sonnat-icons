/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SwapVerticalPaths from "./paths/SwapVertical";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SwapVertical = createSvgIcon(SwapVerticalPaths, "SwapVertical") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SwapVertical;
