/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WineGlassPaths from "./paths/WineGlass";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WineGlass = createSvgIcon(WineGlassPaths, "WineGlass") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WineGlass;
