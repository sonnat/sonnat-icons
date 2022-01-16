/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ThermometerPaths from "./paths/Thermometer";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Thermometer = createSvgIcon(ThermometerPaths, "Thermometer") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Thermometer;
