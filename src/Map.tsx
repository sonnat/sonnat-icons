/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MapPaths from "./paths/Map";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Map = createSvgIcon(MapPaths, "Map") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Map;
