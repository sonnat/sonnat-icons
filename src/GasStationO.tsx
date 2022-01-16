/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GasStationOPaths from "./paths/GasStationO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const GasStationO = createSvgIcon(GasStationOPaths, "GasStationO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default GasStationO;
