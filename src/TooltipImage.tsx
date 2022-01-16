/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TooltipImagePaths from "./paths/TooltipImage";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TooltipImage = createSvgIcon(TooltipImagePaths, "TooltipImage") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TooltipImage;
