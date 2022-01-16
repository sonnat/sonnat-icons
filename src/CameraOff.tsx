/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CameraOffPaths from "./paths/CameraOff";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CameraOff = createSvgIcon(CameraOffPaths, "CameraOff") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CameraOff;
