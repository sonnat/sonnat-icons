/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import UnfoldMoreHorizontalPaths from "./paths/UnfoldMoreHorizontal";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const UnfoldMoreHorizontal = createSvgIcon(UnfoldMoreHorizontalPaths, "UnfoldMoreHorizontal") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default UnfoldMoreHorizontal;
