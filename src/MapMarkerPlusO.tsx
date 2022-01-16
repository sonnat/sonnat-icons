/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MapMarkerPlusOPaths from "./paths/MapMarkerPlusO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MapMarkerPlusO = createSvgIcon(MapMarkerPlusOPaths, "MapMarkerPlusO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MapMarkerPlusO;
