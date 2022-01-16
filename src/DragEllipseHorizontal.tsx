/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DragEllipseHorizontalPaths from "./paths/DragEllipseHorizontal";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DragEllipseHorizontal = createSvgIcon(DragEllipseHorizontalPaths, "DragEllipseHorizontal") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DragEllipseHorizontal;
