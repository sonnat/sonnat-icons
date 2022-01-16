/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WineGlassOPaths from "./paths/WineGlassO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WineGlassO = createSvgIcon(WineGlassOPaths, "WineGlassO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WineGlassO;
