/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CameraOffOPaths from "./paths/CameraOffO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CameraOffO = createSvgIcon(CameraOffOPaths, "CameraOffO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CameraOffO;
