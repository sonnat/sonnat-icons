/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CameraLoadingPaths from "./paths/CameraLoading";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CameraLoading = createSvgIcon(CameraLoadingPaths, "CameraLoading") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CameraLoading;
