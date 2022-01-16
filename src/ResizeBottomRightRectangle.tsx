/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ResizeBottomRightRectanglePaths from "./paths/ResizeBottomRightRectangle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ResizeBottomRightRectangle = createSvgIcon(ResizeBottomRightRectanglePaths, "ResizeBottomRightRectangle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ResizeBottomRightRectangle;
