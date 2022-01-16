/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VolumeHighOPaths from "./paths/VolumeHighO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VolumeHighO = createSvgIcon(VolumeHighOPaths, "VolumeHighO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VolumeHighO;
