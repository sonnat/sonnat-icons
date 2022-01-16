/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VolumeHighPaths from "./paths/VolumeHigh";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VolumeHigh = createSvgIcon(VolumeHighPaths, "VolumeHigh") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VolumeHigh;
