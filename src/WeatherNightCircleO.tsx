/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WeatherNightCircleOPaths from "./paths/WeatherNightCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WeatherNightCircleO = createSvgIcon(WeatherNightCircleOPaths, "WeatherNightCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WeatherNightCircleO;
