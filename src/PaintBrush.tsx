/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PaintBrushPaths from "./paths/PaintBrush";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PaintBrush = createSvgIcon(PaintBrushPaths, "PaintBrush") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PaintBrush;
