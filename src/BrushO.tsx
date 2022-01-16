/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BrushOPaths from "./paths/BrushO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BrushO = createSvgIcon(BrushOPaths, "BrushO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BrushO;
