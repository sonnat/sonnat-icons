/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WeatherSunnyOPaths from "./paths/WeatherSunnyO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WeatherSunnyO = createSvgIcon(WeatherSunnyOPaths, "WeatherSunnyO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WeatherSunnyO;
