/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EarthLargePaths from "./paths/EarthLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const EarthLarge = createSvgIcon(EarthLargePaths, "EarthLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default EarthLarge;
