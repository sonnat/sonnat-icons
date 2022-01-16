/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DragRectangleVerticalPaths from "./paths/DragRectangleVertical";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DragRectangleVertical = createSvgIcon(DragRectangleVerticalPaths, "DragRectangleVertical") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DragRectangleVertical;
