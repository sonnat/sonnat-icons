/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CameraLoadingOPaths from "./paths/CameraLoadingO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CameraLoadingO = createSvgIcon(CameraLoadingOPaths, "CameraLoadingO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CameraLoadingO;
