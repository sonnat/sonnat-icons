/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CrosshairsGpsPaths from "./paths/CrosshairsGps";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CrosshairsGps = createSvgIcon(CrosshairsGpsPaths, "CrosshairsGps") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CrosshairsGps;
