/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import UnfoldLessHorizontalPaths from "./paths/UnfoldLessHorizontal";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const UnfoldLessHorizontal = createSvgIcon(UnfoldLessHorizontalPaths, "UnfoldLessHorizontal") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default UnfoldLessHorizontal;
