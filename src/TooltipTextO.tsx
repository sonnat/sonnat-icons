/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TooltipTextOPaths from "./paths/TooltipTextO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TooltipTextO = createSvgIcon(TooltipTextOPaths, "TooltipTextO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TooltipTextO;
