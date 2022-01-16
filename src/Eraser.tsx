/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EraserPaths from "./paths/Eraser";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Eraser = createSvgIcon(EraserPaths, "Eraser") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Eraser;
