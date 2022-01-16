/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PoiOPaths from "./paths/PoiO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PoiO = createSvgIcon(PoiOPaths, "PoiO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PoiO;
