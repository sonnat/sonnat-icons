/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ZAxisRotateCounterClockwisePaths from "./paths/ZAxisRotateCounterClockwise";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ZAxisRotateCounterClockwise = createSvgIcon(ZAxisRotateCounterClockwisePaths, "ZAxisRotateCounterClockwise") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ZAxisRotateCounterClockwise;
