/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EarthPaths from "./paths/Earth";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Earth = createSvgIcon(EarthPaths, "Earth") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Earth;
