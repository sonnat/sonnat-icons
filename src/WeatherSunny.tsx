/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WeatherSunnyPaths from "./paths/WeatherSunny";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WeatherSunny = createSvgIcon(WeatherSunnyPaths, "WeatherSunny") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WeatherSunny;
