/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ThermometerOPaths from "./paths/ThermometerO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ThermometerO = createSvgIcon(ThermometerOPaths, "ThermometerO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ThermometerO;
