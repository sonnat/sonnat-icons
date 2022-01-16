/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MapMarkerOPaths from "./paths/MapMarkerO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MapMarkerO = createSvgIcon(MapMarkerOPaths, "MapMarkerO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MapMarkerO;
