/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ZAxisRotateClockwisePaths from "./paths/ZAxisRotateClockwise";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ZAxisRotateClockwise = createSvgIcon(ZAxisRotateClockwisePaths, "ZAxisRotateClockwise") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ZAxisRotateClockwise;
