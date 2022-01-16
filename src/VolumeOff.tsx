/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VolumeOffPaths from "./paths/VolumeOff";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VolumeOff = createSvgIcon(VolumeOffPaths, "VolumeOff") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VolumeOff;
