/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CameraFlipPaths from "./paths/CameraFlip";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CameraFlip = createSvgIcon(CameraFlipPaths, "CameraFlip") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CameraFlip;
