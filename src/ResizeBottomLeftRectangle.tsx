/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ResizeBottomLeftRectanglePaths from "./paths/ResizeBottomLeftRectangle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ResizeBottomLeftRectangle = createSvgIcon(ResizeBottomLeftRectanglePaths, "ResizeBottomLeftRectangle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ResizeBottomLeftRectangle;
