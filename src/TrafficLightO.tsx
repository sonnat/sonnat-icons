/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TrafficLightOPaths from "./paths/TrafficLightO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TrafficLightO = createSvgIcon(TrafficLightOPaths, "TrafficLightO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TrafficLightO;
