/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SonnatThinPaths from "./paths/SonnatThin";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SonnatThin = createSvgIcon(SonnatThinPaths, "SonnatThin") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SonnatThin;
