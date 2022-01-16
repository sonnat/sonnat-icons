/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MapMarkerDotsOPaths from "./paths/MapMarkerDotsO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MapMarkerDotsO = createSvgIcon(MapMarkerDotsOPaths, "MapMarkerDotsO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MapMarkerDotsO;
