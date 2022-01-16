/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DragEllipseVerticalPaths from "./paths/DragEllipseVertical";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DragEllipseVertical = createSvgIcon(DragEllipseVerticalPaths, "DragEllipseVertical") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DragEllipseVertical;
