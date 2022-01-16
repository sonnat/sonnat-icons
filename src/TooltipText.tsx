/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TooltipTextPaths from "./paths/TooltipText";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TooltipText = createSvgIcon(TooltipTextPaths, "TooltipText") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TooltipText;
