/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ResizeBottomRightEllipsePaths from "./paths/ResizeBottomRightEllipse";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ResizeBottomRightEllipse = createSvgIcon(ResizeBottomRightEllipsePaths, "ResizeBottomRightEllipse") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ResizeBottomRightEllipse;
