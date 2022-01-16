/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import UnfoldMoreVerticalPaths from "./paths/UnfoldMoreVertical";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const UnfoldMoreVertical = createSvgIcon(UnfoldMoreVerticalPaths, "UnfoldMoreVertical") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default UnfoldMoreVertical;
