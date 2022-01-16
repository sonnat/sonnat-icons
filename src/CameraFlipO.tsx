/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CameraFlipOPaths from "./paths/CameraFlipO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CameraFlipO = createSvgIcon(CameraFlipOPaths, "CameraFlipO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CameraFlipO;
