/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MapMarkerDotsPaths from "./paths/MapMarkerDots";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MapMarkerDots = createSvgIcon(MapMarkerDotsPaths, "MapMarkerDots") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MapMarkerDots;
