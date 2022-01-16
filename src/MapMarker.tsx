/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MapMarkerPaths from "./paths/MapMarker";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MapMarker = createSvgIcon(MapMarkerPaths, "MapMarker") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MapMarker;
