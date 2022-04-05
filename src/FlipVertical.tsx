/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlipVerticalPaths from "./paths/FlipVertical";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FlipVertical = createSvgIcon(FlipVerticalPaths, "FlipVertical") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FlipVertical;
