/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PaintBrushOPaths from "./paths/PaintBrushO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PaintBrushO = createSvgIcon(PaintBrushOPaths, "PaintBrushO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PaintBrushO;
