/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VolumeMediumPaths from "./paths/VolumeMedium";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VolumeMedium = createSvgIcon(VolumeMediumPaths, "VolumeMedium") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VolumeMedium;
