/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RotateRightPaths from "./paths/RotateRight";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const RotateRight = createSvgIcon(RotateRightPaths, "RotateRight") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default RotateRight;
