/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GasStationPaths from "./paths/GasStation";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const GasStation = createSvgIcon(GasStationPaths, "GasStation") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default GasStation;
