/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BrushPaths from "./paths/Brush";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Brush = createSvgIcon(BrushPaths, "Brush") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Brush;
