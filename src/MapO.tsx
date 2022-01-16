/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MapOPaths from "./paths/MapO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MapO = createSvgIcon(MapOPaths, "MapO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MapO;
