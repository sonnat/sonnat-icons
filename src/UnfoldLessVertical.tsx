/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import UnfoldLessVerticalPaths from "./paths/UnfoldLessVertical";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const UnfoldLessVertical = createSvgIcon(UnfoldLessVerticalPaths, "UnfoldLessVertical") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default UnfoldLessVertical;
