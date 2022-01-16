/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VolumeOffOPaths from "./paths/VolumeOffO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VolumeOffO = createSvgIcon(VolumeOffOPaths, "VolumeOffO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VolumeOffO;
