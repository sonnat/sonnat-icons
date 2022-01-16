/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PoiPaths from "./paths/Poi";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Poi = createSvgIcon(PoiPaths, "Poi") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Poi;
