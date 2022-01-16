/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TooltipImageOPaths from "./paths/TooltipImageO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TooltipImageO = createSvgIcon(TooltipImageOPaths, "TooltipImageO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TooltipImageO;
