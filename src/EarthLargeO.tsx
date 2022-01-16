/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EarthLargeOPaths from "./paths/EarthLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const EarthLargeO = createSvgIcon(EarthLargeOPaths, "EarthLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default EarthLargeO;
