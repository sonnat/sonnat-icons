/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MapMarkerPlusPaths from "./paths/MapMarkerPlus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MapMarkerPlus = createSvgIcon(MapMarkerPlusPaths, "MapMarkerPlus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MapMarkerPlus;
