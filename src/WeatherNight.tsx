/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WeatherNightPaths from "./paths/WeatherNight";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WeatherNight = createSvgIcon(WeatherNightPaths, "WeatherNight") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WeatherNight;
