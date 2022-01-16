/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DragRectangleHorizontalPaths from "./paths/DragRectangleHorizontal";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DragRectangleHorizontal = createSvgIcon(DragRectangleHorizontalPaths, "DragRectangleHorizontal") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DragRectangleHorizontal;
