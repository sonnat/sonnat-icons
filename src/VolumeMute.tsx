/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VolumeMutePaths from "./paths/VolumeMute";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VolumeMute = createSvgIcon(VolumeMutePaths, "VolumeMute") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VolumeMute;
