/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ResizeBottomLeftEllipsePaths from "./paths/ResizeBottomLeftEllipse";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ResizeBottomLeftEllipse = createSvgIcon(ResizeBottomLeftEllipsePaths, "ResizeBottomLeftEllipse") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ResizeBottomLeftEllipse;
