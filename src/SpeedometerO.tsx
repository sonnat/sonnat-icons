/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SpeedometerOPaths from "./paths/SpeedometerO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SpeedometerO = createSvgIcon(SpeedometerOPaths, "SpeedometerO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SpeedometerO;
