/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DragLineHorizontalPaths from "./paths/DragLineHorizontal";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DragLineHorizontal = createSvgIcon(DragLineHorizontalPaths, "DragLineHorizontal") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DragLineHorizontal;
