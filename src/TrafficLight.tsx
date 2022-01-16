/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TrafficLightPaths from "./paths/TrafficLight";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TrafficLight = createSvgIcon(TrafficLightPaths, "TrafficLight") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TrafficLight;
