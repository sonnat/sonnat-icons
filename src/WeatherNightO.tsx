/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WeatherNightOPaths from "./paths/WeatherNightO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WeatherNightO = createSvgIcon(WeatherNightOPaths, "WeatherNightO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WeatherNightO;
